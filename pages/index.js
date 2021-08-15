import { Text } from "@ds-pack/components";
import { useEffect } from "react";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

export default function Home() {
  useEffect(() => {
    console.log("Runtime");
  }, []);
  return <Text color="$green-4">My page</Text>;
}
