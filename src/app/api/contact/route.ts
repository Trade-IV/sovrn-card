import { NextResponse } from "next/server";

export async function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Martinez IV;Ruben;;;",
    "FN:Ruben Martinez IV",
    "ORG:SOVRN",
    "TITLE:Founder & CEO",
    "TEL;TYPE=CELL:+18153450286",
    "EMAIL;TYPE=INTERNET:iv.co4444@gmail.com",
    "URL:https://sovrnhq.com",
    "URL;TYPE=LinkedIn:https://www.linkedin.com/in/ruben-martinez-iv-413025226/",
    "URL;TYPE=Instagram:https://www.instagram.com/s.o.v.r.n",
    "END:VCARD",
  ].join("\r\n");

  return new NextResponse(vcard, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Ruben_Martinez_IV.vcf"',
    },
  });
}
