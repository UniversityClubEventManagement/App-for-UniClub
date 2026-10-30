import test from "node:test";
import assert from "node:assert/strict";
import { isPasswordValid } from "./passwordPolicy.ts";

test("accepts passwords that meet the registration policy", () => {
  assert.equal(isPasswordValid("UniClub42!"), true);
});

test("rejects passwords shorter than eight characters", () => {
  assert.equal(isPasswordValid("Ab1!xyz"), false);
});

test("requires at least one number and one special character", () => {
  assert.equal(isPasswordValid("UniClub!!"), false);
  assert.equal(isPasswordValid("UniClub42"), false);
});

test("rejects passwords containing whitespace", () => {
  assert.equal(isPasswordValid("Uni Club42!"), false);
  assert.equal(isPasswordValid("UniClub42!\n"), false);
});
