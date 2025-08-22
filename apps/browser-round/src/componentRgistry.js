import React from "react";
import { Test } from "./app";
import ChickenShoot from "./components/shootGame";
import LogSubmitter from "./components/logSubmitter";
import Chat from "./components/chat";
import ProductList from "./components/productList";
import RateLimitterComponent from "./components/fetchRateLimitter/fetchRateLimitter";
import Explorer from "./components/explorer/explorer";
import TrafficLight from "./components/trafficLight/trafficLight";
import CarouselContainer from "./components/imageCarousel/imageCarousel";
import LruCache from "./components/lruCache/lruCache";
import Paypal from "./components/paypalHackerrank/paypal";
import BasicForm from "./components/basicForm/basicForm";
import ProductListV2 from "./components/productList-useCallbackuseMemo/productList";
import Drawi from "./components/canvasSample/drawi";
import DigitalClock from "./components/digitalClock/digitalClock";
import InfiniteScroller from "./components/infiniteScroller/infiniteScroller";
import DragBlocks from "./components/dragAndDrop/dragBlocks";
import ScrollActivity from "./components/scrollActivity/scrollActivity";
import TabSection from "./components/tabBlock/tabBlock";
import Directory from "./components/explorer/explorer2";
import UndoableCounter from "./components/undoableCounter/undoableCounter";
import DiceRoller from "./components/diceRoller/diceRoller";
import DebouncedSearch from "./components/useDebounce/DebouncedSearch";

export const componentList = {
  DigitalClock: <DigitalClock />,
  // Test: <Test />,
  Drawi: <Drawi />,
  ChickenShoot: <ChickenShoot />,
  LogSubmitter: <LogSubmitter />,
  Chat: <Chat />,
  ProductList: <ProductList />,
  InfiniteScroller: <InfiniteScroller />,
  DragBlocks: <DragBlocks />,
  RateLimitterComponent: <RateLimitterComponent />,
  TabSection: <TabSection />,
  Explorer: <Explorer />,
  ScrollActivity: <ScrollActivity />,
  TrafficLight: <TrafficLight />,
  CarouselContainer: <CarouselContainer />,
  LruCache: <LruCache />,
  Paypal: <Paypal />,
  BasicForm: <BasicForm />,
  ProductListV2: <ProductListV2 />,
  Directory: <Directory />,
  UndoableCounter: <UndoableCounter />,
  DiceRoller: <DiceRoller />,
  DebouncedSearch: <DebouncedSearch />,
};
