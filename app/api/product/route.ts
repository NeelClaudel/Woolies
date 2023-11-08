import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }

  const body = await request.json();
  const { name, description, price, brand, category, inStock, images } = body;

  const product = await prisma.product.create({
    data: {
      name,
      description,
      brand,
      category,
      inStock,
      images,
      price: parseFloat(price),
    },
  });

  return NextResponse.json(product);
}

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();

  // Check if the current user is an admin
  if (!currentUser || currentUser.role !== "ADMIN") {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const body = await request.json();
  const { id, name, description, price, brand, category, inStock, images } = body;

  // Ensure the product ID is provided
  if (!id) {
    return new Response(JSON.stringify({ error: "Product ID is required" }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Update the product with the provided fields
  try {
    const product = await prisma.product.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(price && { price: parseFloat(price) }),
        ...(brand && { brand }),
        ...(category && { category }),
        ...(inStock !== undefined && { inStock }),
        ...(images && { images }),
      },
    });

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: unknown) { // Note the type 'unknown' here
    // Log the error for internal diagnostics
    console.error('Error updating product:', error);
  
    let errorMessage = 'Failed to update product. Please contact support.';
  
    // Check if error is an instance of Error and in development mode
    if (error instanceof Error && process.env.NODE_ENV === 'development') {
      errorMessage += ` Error: ${error.message}`;
    }
  
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
