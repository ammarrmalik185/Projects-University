const testObject = require("../app_server/controllers/playerController")

describe("Character Endpoint Test", () => {
    it("Testing Getting All Characters", done => {
        testObject.GetAllCharacters({}, {
            json: data => {
                expect(data).not.toBeNull();
                done();
            }
        })
    })
    describe("Testing Getting Single Character", () => {
        it("Test 1 (valid data)", done => {
            testObject.GetCharacter({
                params: {id: "albedo"}
            }, { json: data => {
                expect(data.id).toBe("albedo");
                done();
            }})
        })
        it("Test 2 (id does not exist)", done => {
            testObject.GetCharacter({
                params: {id: "randomId"}
            }, { json: data => {
                    expect(data).toBeNull();
                    done();
                }})
        })
    })
})

describe("Artifact Endpoint Test", () => {
    it("Testing Getting All Artifacts", done => {
        testObject.GetAllArtifacts({}, {
            json: data => {
                expect(data).not.toBeNull();
                done();
            }
        })
    })
    describe("Testing Getting Single Artifact", () => {
        it("Test 1 (valid data)", done => {
            testObject.GetArtifact({
                params: {id: 11}
            }, { json: data => {
                    expect(data.id).toBe(11);
                    done();
                }})
        })
        it("Test 2 (id does not exist)", done => {
            testObject.GetArtifact({
                params: {id: -3}
            }, { json: data => {
                    expect(data).toBeNull();
                    done();
                }})
        })
    })
})

describe("Weapon Endpoint Test", ()=>{
    it("Testing Getting All Weapons", done => {
        testObject.GetAllWeapons({}, {
            json: data => {
                expect(data).not.toBeNull();
                done();
            }
        })
    })
    describe("Testing Getting Single Weapon", () => {
        it("Test 1 (valid data)", done => {
            testObject.GetWeapon({
                params: {id: "akuoumaru"}
            }, { json: data => {
                    expect(data.id).toBe("akuoumaru");
                    done();
                }})
        })
        it("Test 2 (id does not exist)", done => {
            testObject.GetWeapon({
                params: {id: "randomId"}
            }, { json: data => {
                    expect(data).toBeNull();
                    done();
                }})
        })
    })
})

describe("Player Account Tests", ()=>{
    describe("Testing Getting Player Account", () => {
        it("Test 1 (valid data)", done => {
            const testUsername = "ammarrmalik185";
            testObject.GetPlayer({
                params:{username:testUsername}
            }, { json: data => {
                    expect(data.username).toBe("ammarrmalik185");
                    done();
                }
            })
        })
        it("Test 1 (invalid data)", done => {
            const testUsername = "randomUsername";
            testObject.GetPlayer({
                params:{username:testUsername}
            }, { json: data => {
                    expect(data).toBeNull();
                    done();
                }
            })
        })
    })

    describe("Creating a player Account", ()=> {
        it("Test 1 (valid data)", done => {
            testObject.RegisterPlayer({
                body: {
                    name: "Ammar", username: "ammarrmalik185", password: "12345678", email:"ammarrmalik185@hotmail.com"
                }
            }, { json: data => {
                    expect(data).toBe("Resgistered!");
                    done();
                }
            })
        })
        it("Test 2 (invalid data)", done => {
            testObject.RegisterPlayer({
                body: {
                    name: "Ammar",
                    teams: "ammarrmalik185",
                    password: "12345678",
                    email: "ammarrmalik185@hotmail.com"
                }
            }, {
                json: data => {
                    expect(data).not.toBe("Resgistered!");
                    done();
                }
            })
        })
    })
})
