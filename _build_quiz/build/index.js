/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_build_quiz/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_build_quiz/src/index.ts":
/*!**********************************!*\
  !*** ./_build_quiz/src/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\nconst util_1 = __importDefault(__webpack_require__(/*! util */ \"util\"));\nconst rimraf_1 = __importDefault(__webpack_require__(/*! rimraf */ \"rimraf\"));\nconst legacyOfTheVoid_1 = __webpack_require__(/*! ./quiz/legacyOfTheVoid */ \"./_build_quiz/src/quiz/legacyOfTheVoid.ts\");\nconst jsonParseStringify_1 = __webpack_require__(/*! ./utils/jsonParseStringify */ \"./_build_quiz/src/utils/jsonParseStringify.ts\");\nconst emptyAnswerSheet_1 = __webpack_require__(/*! ./utils/emptyAnswerSheet */ \"./_build_quiz/src/utils/emptyAnswerSheet.ts\");\nconst quizFileName = \"answerKey.ts\";\nconst quizPath = `./src/quiz/`;\n// prettier-ignore\nconst quizFileContent = `import { Question } from \"../ts/models/quiz\";\n\nconst answerKey: Question[] = ${util_1.default.inspect(legacyOfTheVoid_1.questionsLotv, {\n    showHidden: false,\n    depth: null,\n})};\nexport default answerKey;\n`;\nconst answerSheetFileName = \"answerSheet.json\";\n// deep copy, horrible i know\nconst answerSheet = jsonParseStringify_1.JSON_Parse_Stringify(legacyOfTheVoid_1.questionsLotv);\nemptyAnswerSheet_1.emptyAnswerSheet(answerSheet);\n// clean directory by removal\nrimraf_1.default.sync(\"./src/quiz\");\nfs_1.default.mkdirSync(\"./src/quiz\");\nfs_1.default.appendFile(quizPath + answerSheetFileName, JSON.stringify(answerSheet), (err) => {\n    if (err)\n        console.log(err);\n});\nfs_1.default.appendFile(quizPath + quizFileName, quizFileContent, (err) => {\n    if (err)\n        console.log(err);\n});\n\n\n//# sourceURL=webpack:///./_build_quiz/src/index.ts?");

/***/ }),

/***/ "./_build_quiz/src/quiz/legacyOfTheVoid.ts":
/*!*************************************************!*\
  !*** ./_build_quiz/src/quiz/legacyOfTheVoid.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.questionsLotv = [\n    {\n        type: \"multipleChoice\",\n        expansion: \"Legacy of the Void\",\n        date: \"17 December 2019\",\n        patch: \"4.11.3\",\n        bonus: false,\n        multipleSelect: true,\n        choices: [\n            { content: \"Concussive Shells\", answer: true },\n            { content: \"Force Field\", answer: true },\n            { content: \"Graviton Beam\", answer: true },\n            { content: \"Knockback from KD8 Charge\", answer: true },\n            { content: \"None of the above\", answer: false },\n        ],\n        question: \"Units with the Massive attribute are not effected by\",\n    },\n    {\n        type: \"multiplexCardUnit\",\n        bonus: false,\n        name: \"archon\",\n        race: \"protoss\",\n        expansion: \"Legacy of the Void\",\n        date: \"17 December 2019\",\n        patch: \"4.11.3\",\n        answers: {\n            health: \"10\",\n            shield: \"350\",\n            supply: \"4\",\n            cost: [\n                {\n                    type: \"high-templar high-templar\",\n                    minerals: \"100\",\n                    vespene: \"300\",\n                    parent: [\"high-templar\", \"high-templar\"],\n                },\n                {\n                    type: \"high-templar dark-templar\",\n                    minerals: \"175\",\n                    vespene: \"275\",\n                    parent: [\"high-templar\", \"dark-templar\"],\n                },\n                {\n                    type: \"dark-templar dark-templar\",\n                    minerals: \"250\",\n                    vespene: \"250\",\n                    parent: [\"dark-templar\", \"dark-templar\"],\n                },\n            ],\n            attributes: [\"psionic\", \"massive\"],\n            attackGround: [\n                {\n                    flat: \"25\",\n                    biological: \"31\",\n                },\n            ],\n            attackAir: [\n                {\n                    flat: \"25\",\n                    biological: \"31\",\n                },\n            ],\n        },\n    },\n    {\n        type: \"multiplexCardUnit\",\n        bonus: false,\n        name: \"marine\",\n        race: \"terran\",\n        expansion: \"Legacy of the Void\",\n        patch: \"4.11.3\",\n        date: \"17 December 2019\",\n        answers: {\n            health: \"45\",\n            supply: \"1\",\n            cost: [\n                {\n                    minerals: \"100\",\n                    vespene: \"0\",\n                },\n            ],\n            abilities: [\"stimpack\"],\n            attributes: [\"light\", \"biological\"],\n            attackGround: [\n                {\n                    flat: \"5\",\n                },\n            ],\n            attackAir: [\n                {\n                    flat: \"5\",\n                },\n            ],\n        },\n        abilitiesBank: [\"stimpack\", \"entomb\", \"vortex\", \"mass-recall\"],\n    },\n    {\n        type: \"multiplexCardUnit\",\n        bonus: false,\n        name: \"siege-tank\",\n        race: \"terran\",\n        expansion: \"Legacy of the Void\",\n        patch: \"4.11.3\",\n        date: \"17 December 2019\",\n        answers: {\n            health: \"175\",\n            supply: \"3\",\n            cost: [\n                {\n                    minerals: \"150\",\n                    vespene: \"125\",\n                },\n            ],\n            abilities: [\"siege-tank-siege-mode\", \"siege-tanke-tank-mode\"],\n            attributes: [\"armored\", \"mechanical\"],\n            attackGround: [\n                {\n                    type: \"tank mode\",\n                    flat: \"15\",\n                    armored: \"25\",\n                },\n                {\n                    type: \"siege mode\",\n                    flat: \"40\",\n                    armored: \"70\",\n                },\n            ],\n        },\n        abilitiesBank: [\n            \"siege-tank-siege-mode\",\n            \"siege-tank-tank-mode\",\n            \"computer-terminals\",\n            \"point-defense-drone\",\n        ],\n    },\n    {\n        type: \"techTree\",\n        race: \"terran\",\n        patch: \"4.11.3\",\n        date: \"17 December 2019\",\n        expansion: \"Legacy of the Void\",\n        bonus: false,\n        answers: [\n            {\n                building: \"command-center\",\n                upgrades: [],\n            },\n            {\n                building: \"engineering-bay\",\n                upgrades: [\n                    \"terran-infantry-weapons-level-1\",\n                    \"terran-infantry-armor-level-1\",\n                    \"terran-infantry-weapons-level-2\",\n                    \"terran-infantry-armor-level-2\",\n                    \"terran-infantry-weapons-level-3\",\n                    \"terran-infantry-armor-level-3\",\n                    \"hi-sec-auto-tracking\",\n                    \"neosteel-armor\",\n                ],\n            },\n            {\n                building: \"barracks\",\n                upgrades: [\"combat-shield\", \"stimpack\", \"concussive-shells\"],\n            },\n            {\n                building: \"factory\",\n                upgrades: [\n                    \"infernal-pre-igniter\",\n                    \"mag-field-accelerator\",\n                    \"drilling-claws\",\n                    \"smart-servos\",\n                ],\n            },\n            {\n                building: \"ghost-academy\",\n                upgrades: [\"personal-cloaking\", \"enhanced-shockwaves\"],\n            },\n            {\n                building: \"armory\",\n                upgrades: [\n                    \"terran-vehicle-weapons-level-1\",\n                    \"terran-vehicle-weapons-level-2\",\n                    \"terran-vehicle-weapons-level-3\",\n                    \"terran-vehicle-plating-level-1\",\n                    \"terran-vehicle-plating-level-2\",\n                    \"terran-vehicle-plating-level-3\",\n                    \"terran-ship-weapons-level-1\",\n                    \"terran-ship-weapons-level-2\",\n                    \"terran-ship-weapons-level-3\",\n                ],\n            },\n            {\n                building: \"starport\",\n                upgrades: [\"corvid-reactor\", \"cloaking-field\", \"hyperflight-rotors\"],\n            },\n            {\n                building: \"fusion-core\",\n                upgrades: [\n                    \"weapon-refit\",\n                    \"rapid-reignition-system\",\n                    \"advanced-ballistics\",\n                ],\n            },\n        ],\n        upgradesBank: [\n            \"stimpack\",\n            \"advanced-ballistics\",\n            \"behemoth-reactor\",\n            \"caduceus-reactor\",\n            \"cloak\",\n            \"cloak\",\n            \"combat-shield\",\n            \"concussive-shells\",\n            \"corvid-reactor\",\n            \"drilling-claws\",\n            \"durable-materials\",\n            \"enhanced-munitions\",\n            \"enhanced-shockwaves\",\n            \"explosive-shrapnel-shells\",\n            \"high-capacity-fuel-tanks\",\n            \"hi-sec-auto-tracking\",\n            \"hyperflight-rotors\",\n            \"infernal-pre-igniter\",\n            \"jotun-boosters\",\n            \"mag-field-accelerator\",\n            \"mag-field-launchers\",\n            \"moebius-reactor\",\n            \"neosteel-frame\",\n            \"nitropacks\",\n            \"rapid-fire-launchers\",\n            \"recalibrated-explosives\",\n            \"structure-armor\",\n            \"transformation-servos\",\n            \"terran-ship-plating-level-1\",\n            \"terran-ship-plating-level-2\",\n            \"terran-ship-plating-level-3\",\n            \"terran-ship-weapons-level-1\",\n            \"terran-ship-weapons-level-2\",\n            \"terran-ship-weapons-level-3\",\n            \"terran-vehicle-plating-level-1\",\n            \"terran-vehicle-plating-level-2\",\n            \"terran-vehicle-plating-level-3\",\n            \"terran-vehicle-weapons-level-1\",\n            \"terran-vehicle-weapons-level-2\",\n            \"terran-vehicle-weapons-level-3\",\n            \"terran-infantry-armor-level-1\",\n            \"terran-infantry-armor-level-2\",\n            \"terran-infantry-armor-level-3\",\n            \"terran-infantry-weapons-level-1\",\n            \"terran-infantry-weapons-level-2\",\n            \"terran-infantry-weapons-level-3\",\n            \"yamato-cannon\",\n        ],\n    },\n    {\n        type: \"sorting\",\n        bonus: false,\n        expansion: \"Legacy of the Void\",\n        date: \"17 December 2019\",\n        patch: \"4.11.3\",\n        question: \"Units have ranks based by the amount of kills they have. For the <strong>Protoss</strong>, order the rank names based from lowest to highest\",\n        answer: [\"disciple\", \"mentor\", \"instructor\", \"master\", \"executor\"],\n        bank: [\n            { content: \"disciple\" },\n            { content: \"mentor\" },\n            { content: \"instructor\" },\n            { content: \"master\" },\n            { content: \"executor\" },\n        ],\n    },\n    {\n        type: \"sorting\",\n        bonus: false,\n        expansion: \"Legacy of the Void\",\n        date: \"17 December 2019\",\n        patch: \"4.11.3\",\n        question: \"A player moved a <strong>Thor</strong> in range of following units below. Order the units based on which the <strong>Thor</strong> would attack first from lowest to highest priority\",\n        answer: [\"liberator\", \"marauder\", \"liberator-defender-mode\", \"raven\"],\n        bank: [\n            { icon: \"liberator\" },\n            { icon: \"marauder\" },\n            { icon: \"liberator-defender-mode\" },\n            { icon: \"raven\" },\n        ],\n    },\n    {\n        type: \"sorting\",\n        bonus: false,\n        expansion: \"Legacy of the Void\",\n        date: \"17 December 2019\",\n        patch: \"4.11.3\",\n        question: \"A player moved a <strong>Queen</strong> in range of following units below. Order the units based on which the <strong>Queen</strong> would attack first from lowest to highest priority\",\n        answer: [\"colossus\", \"oracle\", \"high-templar\", \"phoenix\"],\n        bank: [\n            { icon: \"colossus\" },\n            { icon: \"oracle\" },\n            { icon: \"high-templar\" },\n            { icon: \"phoenix\" },\n        ],\n    },\n    {\n        type: \"sorting\",\n        bonus: false,\n        expansion: \"Legacy of the Void\",\n        date: \"17 December 2019\",\n        patch: \"4.11.3\",\n        question: \"Units have ranks based by the amount of kills they have. For the Terran, order the rank names based from lowest to highest\",\n        answer: [\"recruit\", \"corporal\", \"sergeant\", \"captain\", \"commander\"],\n        bank: [\n            { content: \"recruit\" },\n            { content: \"corporal\" },\n            { content: \"sergeant\" },\n            { content: \"captain\" },\n            { content: \"commander\" },\n        ],\n    },\n    {\n        type: \"sorting\",\n        bonus: false,\n        expansion: \"Legacy of the Void\",\n        date: \"17 December 2019\",\n        patch: \"4.11.3\",\n        question: \"Units have ranks based by the amount of kills they have. For the Zerg, order the rank names based from lowest to highest\",\n        answer: [\"predator\", \"slayer\", \"ravager\", \"assassin\", \"metamorph\"],\n        bank: [\n            { content: \"predator\" },\n            { content: \"slayer\" },\n            { content: \"ravager\" },\n            { content: \"assassin\" },\n            { content: \"metamorph\" },\n        ],\n    },\n    {\n        type: \"trueOrFalse\",\n        expansion: \"Legacy of the Void\",\n        date: \"17 December 2019\",\n        patch: \"4.11.3\",\n        bonus: false,\n        question: \"Do Infested Terrans have the ability to burrow?\",\n        answer: true,\n    },\n    {\n        type: \"multiplexCardUnit\",\n        bonus: false,\n        name: \"immortal\",\n        race: \"protoss\",\n        expansion: \"Legacy of the Void\",\n        date: \"17 December 2019\",\n        patch: \"4.11.3\",\n        answers: {\n            health: \"200\",\n            shield: \"100\",\n            supply: \"4\",\n            cost: [\n                {\n                    minerals: \"275\",\n                    vespene: \"100\",\n                },\n            ],\n            abilities: [\"hardened-shields\"],\n            attributes: [\"armored\", \"mechanical\"],\n            attackGround: [\n                {\n                    flat: \"20\",\n                    armored: \"50\",\n                },\n            ],\n        },\n        abilitiesBank: [\"barrier\", \"hardened-shields\", \"shadow-cannon\"],\n    },\n    {\n        type: \"multiplexCardUnit\",\n        bonus: false,\n        name: \"raven\",\n        race: \"terran\",\n        expansion: \"Legacy of the Void\",\n        date: \"17 December 2019\",\n        patch: \"4.11.3\",\n        answers: {\n            health: \"140\",\n            energy: \"200\",\n            supply: \"2\",\n            cost: [\n                {\n                    minerals: \"100\",\n                    vespene: \"200\",\n                },\n            ],\n            attributes: [\"light\", \"mechanical\"],\n            upgrades: [\"durable-materials\", \"corvid-reactor\"],\n        },\n        upgradesBank: [\n            \"durable-materials\",\n            \"corvid-reactor\",\n            \"explosive-shrapnel-shells\",\n            \"recalibrated-explosives\",\n        ],\n    },\n    {\n        type: \"multiplexCardUnit\",\n        bonus: false,\n        name: \"mothership\",\n        race: \"protoss\",\n        expansion: \"Legacy of the Void\",\n        date: \"17 December 2019\",\n        patch: \"4.11.3\",\n        answers: {\n            health: \"350\",\n            shield: \"350\",\n            energy: \"200\",\n            supply: \"8\",\n            cost: [\n                {\n                    minerals: \"400\",\n                    vespene: \"400\",\n                },\n            ],\n            attributes: [\"armored\", \"mechanical\", \"massive\", \"psionic\", \"heroic\"],\n            abilities: [\"cloaking-field\", \"mass-recall\", \"time-warp-red\"],\n            attackGround: [\n                {\n                    flat: \"6\",\n                },\n            ],\n            attackAir: [\n                {\n                    flat: \"6\",\n                },\n            ],\n        },\n        abilitiesBank: [\n            \"cloaking-field\",\n            \"mass-recall\",\n            \"time-warp-red\",\n            \"time-warp-green\",\n            \"photon-overcharge\",\n            \"mass-recall-to-nexus\",\n        ],\n    },\n    {\n        type: \"multiplexCardUnit\",\n        race: \"terran\",\n        expansion: \"Legacy of the Void\",\n        patch: \"4.11.3\",\n        date: \"17 December 2019\",\n        name: \"liberator\",\n        bonus: false,\n        answers: {\n            attributes: [\"armored\", \"mechanical\"],\n            health: \"180\",\n            supply: \"3\",\n            cost: [\n                {\n                    minerals: \"150\",\n                    vespene: \"150\",\n                },\n            ],\n            attackGround: [\n                {\n                    flat: \"75\",\n                },\n            ],\n            attackAir: [\n                {\n                    flat: \"5\",\n                },\n            ],\n            upgrades: [\"advanced-ballistics\"],\n        },\n        upgradesBank: [\"advanced-ballistics\"],\n    },\n    {\n        type: \"multiplexCardUnit\",\n        race: \"terran\",\n        expansion: \"Legacy of the Void\",\n        patch: \"4.11.3\",\n        date: \"17 December 2019\",\n        bonus: false,\n        name: \"infested-terran\",\n        answers: {\n            health: \"50\",\n            attributes: [\"biological\", \"light\", \"summoned\"],\n            abilities: [\"burrow\"],\n            cost: [\n                {\n                    minerals: \"0\",\n                    vespene: \"0\",\n                },\n            ],\n            attackGround: [\n                {\n                    flat: \"6\",\n                },\n            ],\n            attackAir: [\n                {\n                    flat: \"14\",\n                },\n            ],\n        },\n        abilitiesBank: [\"burrow\"],\n    },\n    {\n        type: \"multiplexCardAbility\",\n        race: \"zerg\",\n        expansion: \"Legacy of the Void\",\n        patch: \"4.11.3\",\n        date: \"17 December 2019\t\",\n        bonus: true,\n        name: \"abduct\",\n        castersBank: [\"infestor\", \"queen\", \"viper\", \"changeling\"],\n        answers: {\n            caster: \"viper\",\n            energyCost: \"75\",\n            choices: [\n                {\n                    answer: true,\n                    content: \"Pulls a target unit to the location of the Viper.\",\n                },\n            ],\n        },\n    },\n    {\n        type: \"trueOrFalse\",\n        bonus: false,\n        expansion: \"Legacy of the Void\",\n        patch: \"4.11.3\",\n        date: \"17 December 2019\",\n        answer: false,\n        question: \"Do Thors have energy\",\n    },\n];\n\n\n//# sourceURL=webpack:///./_build_quiz/src/quiz/legacyOfTheVoid.ts?");

/***/ }),

/***/ "./_build_quiz/src/utils/areListsSame.ts":
/*!***********************************************!*\
  !*** ./_build_quiz/src/utils/areListsSame.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.areListsSame = (list1, list2) => {\n    if (list1.length !== list2.length)\n        return false;\n    return list1.every((item, idx) => list2.includes(item));\n};\n\n\n//# sourceURL=webpack:///./_build_quiz/src/utils/areListsSame.ts?");

/***/ }),

/***/ "./_build_quiz/src/utils/emptyAnswerSheet.ts":
/*!***************************************************!*\
  !*** ./_build_quiz/src/utils/emptyAnswerSheet.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst loopingObjects_1 = __webpack_require__(/*! ./loopingObjects */ \"./_build_quiz/src/utils/loopingObjects.ts\");\nconst shuffleSortList_1 = __webpack_require__(/*! ./shuffleSortList */ \"./_build_quiz/src/utils/shuffleSortList.ts\");\nexports.emptyAnswerSheet = (answerSheet) => {\n    for (let item of answerSheet) {\n        emptyCurrentItem(item);\n    }\n};\nconst emptyCurrentItem = (question) => {\n    switch (question.type) {\n        case \"multiplexCardUnit\":\n            return loopingObjects_1.emptyProperties(question.answers, [\n                \"type\",\n                \"parent\",\n                \"description\",\n            ]);\n        case \"multipleChoice\":\n            return loopingObjects_1.emptyProperties(question.choices, [\"content\"]);\n        case \"techTree\":\n            return loopingObjects_1.emptyProperties(question.answers, [\"building\"]);\n        case \"trueOrFalse\":\n            question.answer = false;\n            return;\n        case \"sorting\":\n            question.bank = shuffleSortList_1.shuffleSortList({\n                target: question.bank,\n                blackList: question.answer,\n            });\n            question.answer = [];\n            return;\n    }\n};\n\n\n//# sourceURL=webpack:///./_build_quiz/src/utils/emptyAnswerSheet.ts?");

/***/ }),

/***/ "./_build_quiz/src/utils/jsonParseStringify.ts":
/*!*****************************************************!*\
  !*** ./_build_quiz/src/utils/jsonParseStringify.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction JSON_Parse_Stringify(input) {\n    return JSON.parse(JSON.stringify(input));\n}\nexports.JSON_Parse_Stringify = JSON_Parse_Stringify;\n\n\n//# sourceURL=webpack:///./_build_quiz/src/utils/jsonParseStringify.ts?");

/***/ }),

/***/ "./_build_quiz/src/utils/loopingObjects.ts":
/*!*************************************************!*\
  !*** ./_build_quiz/src/utils/loopingObjects.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst areListsSame_1 = __webpack_require__(/*! ./areListsSame */ \"./_build_quiz/src/utils/areListsSame.ts\");\nexports.compareAndScoreMultiplexCard = (obj1, obj2, score, ignore) => {\n    for (let key in obj1) {\n        if (ignore && ignore.includes(key))\n            continue;\n        const value1 = obj1[key];\n        const value2 = obj2[key];\n        if (Array.isArray(value1)) {\n            if (!isObject(value1[0])) {\n                if (areListsSame_1.areListsSame(value1, value2)) {\n                    score.current += 1;\n                    score.total += 1;\n                }\n                else {\n                    score.total += 1;\n                }\n            }\n            else {\n                for (let i = 0; i < value1.length; i++) {\n                    const item1 = value1[i];\n                    const item2 = value2[i];\n                    exports.compareAndScoreMultiplexCard(item1, item2, score, ignore);\n                }\n            }\n            continue;\n        }\n        if (isObject(value1)) {\n            exports.compareAndScoreMultiplexCard(obj1, obj2, score);\n            continue;\n        }\n        debugger;\n        if (value1 === value2) {\n            score.current += 1;\n            score.total += 1;\n        }\n        else {\n            score.total += 1;\n        }\n    }\n};\nexports.emptyProperties = (question, ignore) => {\n    for (let key in question) {\n        const value = question[key];\n        if (ignore.includes(key)) {\n            continue;\n        }\n        if (Array.isArray(value)) {\n            if (!isObject(value[0])) {\n                question[key] = [];\n                continue;\n            }\n            for (let item of value) {\n                exports.emptyProperties(item, ignore);\n            }\n        }\n        if (typeof value === \"string\") {\n            question[key] = \"\";\n            continue;\n        }\n        if (typeof value === \"number\") {\n            question[key] = 0;\n            continue;\n        }\n        if (typeof value === \"boolean\") {\n            question[key] = false;\n        }\n        if (isObject(value)) {\n            exports.emptyProperties(value, ignore);\n        }\n    }\n};\nconst isObject = (a) => {\n    return !!a && a.constructor === Object;\n};\n\n\n//# sourceURL=webpack:///./_build_quiz/src/utils/loopingObjects.ts?");

/***/ }),

/***/ "./_build_quiz/src/utils/shuffleSortList.ts":
/*!**************************************************!*\
  !*** ./_build_quiz/src/utils/shuffleSortList.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.shuffleSortList = ({ target, blackList, }) => {\n    let clone = [...target];\n    let result = [];\n    function run(arr) {\n        if (!arr.length)\n            return result;\n        const genNum = Math.floor(Math.random() * arr.length);\n        const item = arr.splice(genNum, 1)[0];\n        result.push(item);\n        return run(arr);\n    }\n    run(clone);\n    while (result.every((item, idx) => {\n        if (item.icon && item.icon === blackList[idx]) {\n            return true;\n        }\n        if (item.content && item.content === blackList[idx]) {\n            return true;\n        }\n        return false;\n    })) {\n        result = [];\n        clone = [...target];\n        run(clone);\n    }\n    return result;\n};\n\n\n//# sourceURL=webpack:///./_build_quiz/src/utils/shuffleSortList.ts?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "rimraf":
/*!*************************!*\
  !*** external "rimraf" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rimraf\");\n\n//# sourceURL=webpack:///external_%22rimraf%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });