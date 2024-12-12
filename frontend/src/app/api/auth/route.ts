import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    // const { email, password } = body;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/users`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    // const accessToken = await signin({ email, password });

    return NextResponse.json(
      { message: "login successful", data: response },
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "error" }, { status: 500 });
  }
};

const GET = () => {
  return NextResponse.json({ message: "Hola!!" }, { status: 200 });
};

export { POST, GET };
