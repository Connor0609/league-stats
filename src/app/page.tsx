import { authenticateDBConnection } from "data/database";

export default function Page() {
  authenticateDBConnection();
  return <></>;
}
