import { FC } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const CurrentProject: FC = () => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="text-xl font-semibold">
        Current Project: <span className="text-primary">InvoiceHub</span> 🚀
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-muted-foreground">
        I'm currently developing InvoiceHub, my first SaaS project. It's been an
        incredible journey implementing enterprise-level best practices! 🏗️
      </p>

      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">Clean Architecture 🏛️</Badge>
        <Badge variant="outline">SOLID principles 💪</Badge>
        <Badge variant="outline">Scalable state management 📈</Badge>
        <Badge variant="outline">Performance optimization ⚡</Badge>
        <Badge variant="outline">Security best practices 🔒</Badge>
        <Badge variant="outline">CI/CD pipelines 🔄</Badge>
        <Badge variant="outline">Automated testing 🧪</Badge>
        <Badge variant="outline">Payment integrations 💳</Badge>
        <Badge variant="outline">Responsive design 📱</Badge>
      </div>

      <Card className="bg-primary/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Zap className="mr-2" /> Currently Cooking 👨‍🍳
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Whipping up some fancy caching strategies to make data retrieval
            lightning-fast! ⚡ Expect smoother performance and a user experience
            that'll knock your socks off! 🧦
          </p>
        </CardContent>
      </Card>
    </CardContent>
    <CardFooter>
      <Link href="/projects/invoicehub" passHref>
        <Button>View InvoiceHub 👀</Button>
      </Link>
    </CardFooter>
  </Card>
);

export default CurrentProject;
