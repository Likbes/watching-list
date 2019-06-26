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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const movie_1 = __importDefault(require("../models/movie"));
const director_1 = __importDefault(require("../models/director"));
const Movie_1 = __importDefault(require("../schemas/Movie"));
let default_1 = class default_1 {
    movie(id) {
        return movie_1.default.findById(id);
    }
    movies() {
        return movie_1.default.find({});
    }
    addMovie(name, genre, directorId) {
        const movie = new movie_1.default({
            name, genre, directorId
        });
        return movie.save();
    }
    director(movie) {
        return director_1.default.findById(movie.directorId);
    }
};
__decorate([
    type_graphql_1.Query(returns => Movie_1.default),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], default_1.prototype, "movie", null);
__decorate([
    type_graphql_1.Query(returns => [Movie_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], default_1.prototype, "movies", null);
__decorate([
    type_graphql_1.Mutation(returns => Movie_1.default),
    __param(0, type_graphql_1.Arg("name")),
    __param(1, type_graphql_1.Arg("genre")),
    __param(2, type_graphql_1.Arg("directorId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], default_1.prototype, "addMovie", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], default_1.prototype, "director", null);
default_1 = __decorate([
    type_graphql_1.Resolver(of => Movie_1.default)
], default_1);
exports.default = default_1;
