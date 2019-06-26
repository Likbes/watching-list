"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Movie_1 = __importDefault(require("./Movie"));
// const DirectorType = new GraphQLObjectType({
//   name: 'Director',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     age: { type: GraphQLInt },
//     movies: {
//       type: GraphQLList(MovieType),
//       resolve(parent, args) {
//         // return movies.filter(m => m.directorId == parent.id);
//         return Movies.find({ directorId: parent.id });
//       },
//     },
//   }),
// });
let Director = class Director {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Director.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Director.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], Director.prototype, "age", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Director.prototype, "directorId", void 0);
__decorate([
    type_graphql_1.Field(type => [Movie_1.default]),
    __metadata("design:type", Array)
], Director.prototype, "movies", void 0);
Director = __decorate([
    type_graphql_1.ObjectType()
], Director);
exports.default = Director;
