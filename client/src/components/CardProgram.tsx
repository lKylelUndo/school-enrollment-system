import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProgramCardTypes = {
  program: {
    title: string;
    description: string;
  };
};

function CardProgram({ program }: ProgramCardTypes) {
  return (
    <Card className="!p-6">
      <CardHeader>
        <CardTitle>{program.title}</CardTitle>
        <CardDescription>{program.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default CardProgram;
