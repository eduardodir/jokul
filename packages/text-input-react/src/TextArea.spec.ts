import { visualRegressionTest } from "../../../jest/VisualRegressionTest";
import { name } from "../package.json";

const testName = name.replace("input", "area");

visualRegressionTest(testName);
