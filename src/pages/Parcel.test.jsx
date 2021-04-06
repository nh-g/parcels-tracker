import "@testing-library/jest-dom";
import { RecoilRoot, snapshot_UNSTABLE } from "recoil";
import * as React from "react";
import {
  render,
  renderWithRouter,
  fireEvent,
  screen,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Parcel from "./Parcel";
import { parcelState } from "../state/parcelState";

const parcelMock = {
  id: 1,
  status: "delivered",
  eta: "2020-09-28T17:47:57Z",
  parcel_id: "4464",
  sender: "Rhyzio",
  verification_required: true,
  location_id: "RO96 UOWF LEVP KNZI DSX9 8SJW",
  location_name: "Old Shore",
  location_coordinate_latitude: 43.4945737,
  location_coordinate_longitude: 5.8978018,
  location_status_ok: true,
  user_phone: "+46 729478015",
  user_name: "Jhon Doe",
  notes: "Removal of Intbd Fus Dev from Cerv Jt, Open Approach",
  last_updated: "2020-09-05T23:22:56Z",
};

const parcelStateMock = [parcelMock];

it("shows not found when the parcel does not exist", () => {
  render(
    <MemoryRouter>
      <RecoilRoot
        initializeState={(snap) => snap.set(parcelState, parcelStateMock)}
      >
        <Parcel match={{ params: { id: "NOT_FOUND" } }}></Parcel>
      </RecoilRoot>
    </MemoryRouter>
  );
  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});

it("should show parcel view when the paracel exists", () => {
  const parcel_id = parcelMock.parcel_id;
  render(
    <MemoryRouter>
      <RecoilRoot
        initializeState={(snap) => snap.set(parcelState, parcelStateMock)}
      >
        <Parcel match={{ params: { id: parcel_id } }}></Parcel>
      </RecoilRoot>
    </MemoryRouter>
  );

  expect(screen.getByText(parcelMock.sender)).toBeInTheDocument();
});
