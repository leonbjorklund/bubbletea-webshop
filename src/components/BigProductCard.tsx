import { Card, CardHeader, Heading } from "@chakra-ui/react";

interface BigProductCardProps {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  imageAlt: string;
  bigCardBG: string;
}

export function BigProductCard({ 
  name, price, description, imageUrl, imageAlt, bigCardBG,
 }: BigProductCardProps) {
  return (
    <Card border="2px solid black">
      <CardHeader>
        <Heading size='md'>Client Report</Heading>
      </CardHeader>
    </Card>
  )
}




