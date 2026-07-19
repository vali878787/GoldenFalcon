import { NextResponse } from "next/server";
import documents from "@/data/documents/documents.json";


export async function GET(
  request: Request
) {

  const { searchParams } = new URL(request.url);

  const reference = searchParams.get("reference");


  if (!reference) {

    return NextResponse.json(
      {
        verified: false,
        message: "Reference code is required",
      },
      {
        status: 400,
      }
    );

  }


  const document = documents.find(
    (item) =>
      item.reference.toLowerCase() ===
      reference.toLowerCase()
  );


  if (!document) {

    return NextResponse.json(
      {
        verified: false,
        message: "Invalid reference code",
      },
      {
        status: 404,
      }
    );

  }


  return NextResponse.json(
    {
      verified: true,
      document,
    },
    {
      status: 200,
    }
  );

}