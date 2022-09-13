import { getAuth } from "firebase/auth";
import app from "./connect";
const auth = getAuth(app);
export default auth