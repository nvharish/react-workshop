import { createContext } from "react";
const FamilyContext = createContext();

let FamilyProvider = FamilyContext.Provider;
let FamilyConsumer = FamilyContext.Consumer;

export { FamilyProvider, FamilyConsumer }