import { Card, CardHeader, Heading } from "@chakra-ui/react";


export function BigProductCard() {
  return (
    <Card border="2px solid black">
      <CardHeader>
        <Heading size='md'>Client Report</Heading>
      </CardHeader>
    </Card>
  )
}



// props:
// name, price, description, image, bg?

