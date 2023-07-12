import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./UI/avatar";
import { SignInButton, useUser } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./UI/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./UI/alert-dialog";
import { Skeleton } from "./UI/skeleton";
import { useClerk } from "@clerk/clerk-react";
import { Button } from "./UI/button";
import { useRouter } from "next/router";

type Props = {
  isAdmin: boolean | undefined;
  user: any;
  isLoaded: boolean;
  isSignedIn: boolean | undefined;
};

const Navbar = ({ isAdmin, user, isLoaded, isSignedIn }: Props) => {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <>
      <nav className="border-b border-gray-500 bg-zinc-950">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link href="/" className="flex items-center">
            <img
              src="/booker-logo.svg"
              className="mr-3 h-8"
              alt="Booker Logo"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-white dark:text-white">
              Booker
            </span>
          </Link>
          <div className="flex items-center md:order-2">
            {isSignedIn ? (
              <AlertDialog>
                <DropdownMenu>
                  <Avatar className="cursor-pointer hover:opacity-50">
                    {isLoaded ? (
                      <DropdownMenuTrigger>
                        <AvatarImage src={user.imageUrl} />
                      </DropdownMenuTrigger>
                    ) : (
                      <Skeleton className="h-12 w-12 rounded-full bg-zinc-700" />
                    )}
                  </Avatar>

                  <DropdownMenuContent className="cursor-pointer border-none bg-zinc-950 text-slate-300">
                    <DropdownMenuItem className="cursor-pointer">
                      <Link href={"/profile/mybooking"}>My Booking</Link>
                    </DropdownMenuItem>
                    {isAdmin && (
                      <DropdownMenuItem className="cursor-pointer">
                        <Link href={"/profile/admin"}>Admin</Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="cursor-pointer">
                      <AlertDialogTrigger>Sign Out</AlertDialogTrigger>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <AlertDialogContent className="bg-zinc-950">
                  <AlertDialogHeader className="bg-zinc-950">
                    <AlertDialogTitle className="text-slate-400">
                      Are you absolutely sure you want to sign out?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-slate-400">
                      This action cannot be undone. This will remove your access
                      from using many features this website offers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="border-none bg-slate-900 text-white hover:opacity-50">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        signOut();
                        router.push("/");
                      }}
                      className="bg-white text-zinc-950 hover:bg-white hover:opacity-50"
                    >
                      Sign Out
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ) : (
              <SignInButton>
                <Button className="bg-white text-zinc-950 hover:bg-white hover:opacity-50">
                  Sign In
                </Button>
              </SignInButton>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
