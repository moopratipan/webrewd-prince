import type React from "react"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PricingCards() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          แพ็คเกจราคา
        </h1>
        <p className="text-muted-foreground mt-2">เลือกแพ็คเกจที่เหมาะกับธุรกิจของคุณ</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Package */}
        <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 flex flex-col">
          <CardHeader className="pb-8 pt-6">
            <CardTitle className="text-2xl font-bold text-center">Basic Package</CardTitle>
            <div className="text-center mt-2">
              <span className="text-4xl font-bold text-purple-600">฿6,999</span>
            </div>
            <CardDescription className="text-center mt-2">
              สำหรับผู้ที่เพิ่งเริ่มต้นธุรกิจและต้องการระบบพื้นฐานเพื่อสร้างยอดขาย
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-3">
              <FeatureItem>ระบบคูปอง</FeatureItem>
              <FeatureItem>Flash Sale</FeatureItem>
              <FeatureItem>การใช้งานรางวัล</FeatureItem>
              <FeatureItem>ระบบแจ้งเตือน (เฉพาะ Line)</FeatureItem>
              <FeatureItem>ระบบเติมเงิน</FeatureItem>
              <FeatureItem>ประกาศของร้านค้า</FeatureItem>
              <FeatureItem>รีวิวจากลูกค้า</FeatureItem>
              <FeatureItem>ระบบจัดการ Presell สินค้า</FeatureItem>
              <FeatureItem>โพสต์ประกาศแชร์โปรโมทร้านค้า</FeatureItem>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              เลือกแพ็คเกจนี้
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Package */}
        <Card className="border-2 border-pink-300 hover:border-pink-500 transition-all duration-300 flex flex-col relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 text-sm font-medium">
            แนะนำ
          </div>
          <CardHeader className="pb-8 pt-6">
            <CardTitle className="text-2xl font-bold text-center">Pro Package</CardTitle>
            <div className="text-center mt-2">
              <span className="text-4xl font-bold text-pink-600">฿13,999</span>
            </div>
            <CardDescription className="text-center mt-2">
              สำหรับผู้ประกอบการที่ต้องการสร้างการเติบโตและปรับปรุงประสบการณ์ลูกค้า
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-3">
              <p className="font-medium text-center text-pink-600 mb-2">✨ทุกฟีเจอร์ของ Basic Package✨ และเพิ่ม:</p>
              <FeatureItem>ส่วนลดสมาชิก</FeatureItem>
              <FeatureItem>ระบบจัดอันดับรีวิวร้านค้า</FeatureItem>
              <FeatureItem>พอยท์แลกของรางวัล</FeatureItem>
              <FeatureItem>ระบบแจ้งเตือน (ครบทั้ง Line, Email, และ SMS)</FeatureItem>
              <FeatureItem>กิจกรรมการส่งฟรี</FeatureItem>
              <FeatureItem>การพิมพ์ใบสั่งซื้อสินค้า</FeatureItem>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              เลือกแพ็คเกจนี้
            </Button>
          </CardFooter>
        </Card>

        {/* Ultimate Package */}
        <Card className="border-2 border-purple-300 hover:border-purple-500 transition-all duration-300 flex flex-col">
          <CardHeader className="pb-8 pt-6">
            <CardTitle className="text-2xl font-bold text-center">Ultimate Package</CardTitle>
            <div className="text-center mt-2">
              <span className="text-4xl font-bold text-purple-600">฿15,999</span>
            </div>
            <CardDescription className="text-center mt-2">ระยะเวลาในการทำงาน 5 วัน</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-3">
              <p className="font-medium text-center text-purple-600 mb-2">✨ทุกฟีเจอร์ของ Pro Package✨ และเพิ่ม:</p>
              <FeatureItem>การซื้อแบบกลุ่ม</FeatureItem>
              <FeatureItem>ระบบจับฉลาก</FeatureItem>
              <FeatureItem>กิจกรรมการตัดราคา</FeatureItem>
              <FeatureItem>สมาชิกใหม่</FeatureItem>
              <FeatureItem>ระบบเช็คอินรายวัน</FeatureItem>
              <FeatureItem>ดึงข้อมูลสินค้าจาก Shopee, Lazada, Temu</FeatureItem>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
              เลือกแพ็คเกจนี้
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mt-0.5">
        <Check className="h-3 w-3 text-white" />
      </div>
      <span className="ml-3 text-sm">{children}</span>
    </div>
  )
}

