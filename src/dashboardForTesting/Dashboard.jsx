import React, { useContext, useState } from "react";
import Button from "../components/Button";
import Container from "../components/layouts/Container";
import langContext from "../contexts/LangContext";

const Dashboard = () => {
  const { setSpringSaleEnd } = useContext(langContext);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [inputVal, setInputVal] = useState(null);
  const [date, setDate] = useState(null);

  const pass = "e-shop@admin";
  const newDate = new Date(date).getTime();
  setSpringSaleEnd(newDate)
  
  console.log(newDate);
  
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-20">
        {!isDashboardOpen ? (
          <div className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center font-['Poppins']">Admin Login</h2>
            <input
              className="text-gray-700 font-normal font-['Montserrat'] text-base leading-5 py-4 px-6 rounded-lg border border-gray-300 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="password"
              placeholder="Enter your password ..."
              onChange={(e) => setInputVal(e.target.value)}
            />
            <Button
              text={"Submit"}
              onClick={() =>
                inputVal === pass
                  ? setIsDashboardOpen(true)
                  : alert("Wrong Password!")
              }
              className="w-full"
            />
          </div>
        ) : (
          <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg flex flex-col items-center gap-6">
            <h2 className="text-gray-800 font-['Poppins'] font-semibold leading-tight text-4xl mb-4 text-center">Dashboard</h2>
            <label htmlFor="datetime-local-input" className="block text-gray-600 font-medium mb-2">
              Select Date & Time
            </label>
            <input
              type="datetime-local"
              id="datetime-local-input"
              // min="2023-01-01T10:00"
              // max="2024-12-31T20:00"
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full"
            />
            {date && (
              <div className="mt-4 text-gray-700 text-center">
                <div>
                  <span className="font-semibold">Selected:</span> {date}
                </div>
                <div>
                  <span className="font-semibold">Timestamp:</span> {newDate}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Dashboard;
