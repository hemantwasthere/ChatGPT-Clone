"use client"

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

function SideBar() {
    const { data: session } = useSession();
    // console.log(session?.user?.image + "session here!!!!!")
    return (
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>

                    {/* NewChat  */}
                    <NewChat />

                    <div>
                        {/* ModelSelection  */}
                    </div>

                    {/* Map through the ChatRows */}
                </div>
            </div>
            {session && <img onClick={() => signOut()} className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50" src={session.user?.image!} alt="Profile pic" />}
        </div>
    )
}

export default SideBar