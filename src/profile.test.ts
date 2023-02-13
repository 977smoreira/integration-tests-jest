require("dotenv").config({ path: `./.env.local` });

import chai from "chai";
import chaiHttp from "chai-http";
import { Collection, Db, MongoClient, WithId } from "mongodb";
import { entityCaster } from "./fixtures/entityCaster";
import profile from "./fixtures/profile.json";

const CASTER_BASE_URL = "https://dev-api.sonova.xyz/caster/v1/";
const DELAY_FOR_THE_SERVICES = 5000;
const MONGODB_URI = "";
const DE_MONGODB_ENTITY_DATABASE = "dev-de-caster";
const DE_MONGODB_SYSTEM_DATABASE = "caster-test";

chai.use(chaiHttp);
describe("Create a Profile for de", () => {
  const timestamp = Date.now() / 1000;
  const profileId = `${profile.id}-${timestamp}-de`;

  beforeEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, DELAY_FOR_THE_SERVICES));
  });

  it(`should create a Profile for de with id ${profileId}`, async () => {
    const url = `de/entities/lead/${profileId}`;

    const response = await chai
      .request(CASTER_BASE_URL)
      .post(url)
      .send(profile);
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  it(`should Autocomplete the Profile for de with id ${profileId}`, async function () {
    const url = `de/entities/lead/${profileId}/entityReady`;
    const response = await chai.request(CASTER_BASE_URL).post(url).send({
      autocomplete: true,
    });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  describe("check mongodb entity", () => {
    let connection: MongoClient;
    let entityDb: Db;
    let stateDb: Db;
    let entities: Collection;
    let states: Collection;

    beforeAll(async () => {
      connection = await MongoClient.connect(MONGODB_URI);
      entityDb = connection.db(DE_MONGODB_ENTITY_DATABASE);
      stateDb = connection.db(DE_MONGODB_SYSTEM_DATABASE);

      entities = entityDb.collection("entities");
      states = stateDb.collection("state");
    });

    beforeEach(async () => {
      await new Promise((resolve) =>
        setTimeout(resolve, DELAY_FOR_THE_SERVICES * 4)
      );
    });

    afterAll(async () => {
      await connection.close();
    });

    it(`should MongoDB contain the Entity for de with id ${profileId}`, async function () {
      const entity = await entities.findOne({ id: profileId });

      expect(entity).toEqual(entityCaster);
    });

    it(`should the STATE for country de with id ${profileId} have status "done"`, async function () {
      const state: WithId<any> = await states.findOne({ entityId: profileId });

      expect(state.status).toEqual("done");
    });
  });
});
