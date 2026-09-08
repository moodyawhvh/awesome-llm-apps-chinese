// 中文注释由 awesome-llm-apps-chinese 汉化项目添加
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/plans/[id]:按 ID 查询单个行程计划,连同状态与输出一起返回
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    // 查询行程计划,同时关联加载 status(状态)与 output(输出)
    const tripPlan = await prisma.tripPlan.findUnique({
      where: { id },
      include: {
        status: true,
        output: true,
      },
    });

    if (!tripPlan) {
      return NextResponse.json(
        {
          success: false,
          message: 'Trip plan not found'
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        tripPlan
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching trip plan:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch trip plan'
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // 先确认行程计划是否存在
    const tripPlan = await prisma.tripPlan.findUnique({
      where: { id },
    });

    if (!tripPlan) {
      return NextResponse.json(
        {
          success: false,
          message: 'Trip plan not found'
        },
        { status: 404 }
      );
    }

    // 先删除关联记录(status 与 output),再删除行程计划本身
    await prisma.tripPlanStatus.deleteMany({
      where: { tripPlanId: id },
    });

    await prisma.tripPlanOutput.deleteMany({
      where: { tripPlanId: id },
    });

    // 删除行程计划
    await prisma.tripPlan.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Trip plan deleted successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting trip plan:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to delete trip plan'
      },
      { status: 500 }
    );
  }
}