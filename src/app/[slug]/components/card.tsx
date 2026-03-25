"use client";

import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WelcomeCardProps {
  imageUrl: string;
  alt: string;
  buttonText: string;
  option?: ConsumptionMethod;
}

const WelcomeCard = ({
  imageUrl,
  alt,
  buttonText,
  option,
}: WelcomeCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image src={imageUrl} alt={alt} fill />
        </div>
        <Link href={`/menu?consumptionMethod=${option}`}>
          <Button variant="secondary">{buttonText}</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
