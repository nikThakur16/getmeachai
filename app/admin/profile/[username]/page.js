import { notFound } from "next/navigation";
import connectDb from "@/db/connectDb";
import User from "@/models/User";
import Profile from "@/components/Profile";

export default async function UsernamePage(props) {
  const { username } = (await props.params) || {};
  await connectDb();

  const user = await User.findOne({ username });

  if (!user) {
    return notFound();
  }

  return (
    <>
      <Profile username={username} />
    </>
  );
}