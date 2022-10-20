import { useState, useEffect } from "react";
import Head from "next/head";
import { Card } from "../components/card";

export default function Home() {
  const [time, setTime] = useState<Date | null>(null);
  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((json) => setTime(new Date(json.time)));
  }, []);

  return (
    <div className="bg-[#f2f2f2] dark:bg-[#060026] h-screen w-screen">
      <div className="flex justify-between h-100 pb-0 p-8">
        <h1 className="w-100 text-xl font-bold dark:text-white">Dashboard</h1>
        <button className="rounded-lg bg-darkBlue text-white p-2">
          New click
        </button>
      </div>
      <div className="m-5">
        <div className="grid gap-4 grid-cols-2 dark:text-white">
          <Card>
            <h2>Activity</h2>
          </Card>
          <Card className="h-80">
            <h2>My Calendar</h2>
          </Card>
        </div>
        <div className="grid gap-2 grid-cols-9">
          <Card className="h-80 col-start-1 col-end-6 w-full dark:text-white">
            <h2>My demo</h2>
          </Card>
          <Card className="h-80 col-start-6 col-end-8 bg-lightBlue p-2">
            <h2 className="text-white">Time</h2>
            <p className="text-white">
              {time &&
                `The time is ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
            </p>
          </Card>
          <Card className="h-80 col-start-8 col-end-10 dark:text-white">
            <h2>My tasks</h2>
          </Card>
        </div>
      </div>
    </div>
  );
}
