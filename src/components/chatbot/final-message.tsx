// A special placeholder string to mark the final message.
const FINAL_MESSAGE_KEY = "__FINAL_MESSAGE__";

// Keep this as-is — no embedded links here
// because we will detect FINAL_MESSAGE_KEY and render a React component instead.
const FINAL_MESSAGE = `If you want more info, email me at philip.baravi@gmail.com 
or text me at WhatsApp +34664587841. Also check my socials in the footer. 
You can’t send messages anymore.`;

// A small custom React component for your final message
import { useClipboard } from "@/hooks/use-clipboard";
// Example: if you have a toast system like react-hot-toast or your own:
import { useToast } from "@/hooks/use-toast";
// Adjust the above import to match however you display toasts in your code.

function FinalMessage() {
  const { copyToClipboard } = useClipboard();
  const { toast } = useToast(); // or however you trigger your toast

  const handleCopyPhone = async () => {
    try {
      await copyToClipboard("+34664587841");
      toast({
        title: "Number copied!",
        description:
          "Phone number +34664587841 has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Could not copy the phone number.",
        variant: "destructive",
      });
    }
  };

  return (
    <span>
      If you want more info, email me at{" "}
      <a
        href="mailto:philip.baravi@gmail.com"
        className="text-blue-600 hover:underline"
      >
        philip.baravi@gmail.com
      </a>{" "}
      or text me at{" "}
      <button
        onClick={handleCopyPhone}
        className="text-blue-600 hover:underline"
      >
        WhatsApp +34664587841
      </button>
      . Also check my socials in the footer.
    </span>
  );
}

export default FinalMessage;
