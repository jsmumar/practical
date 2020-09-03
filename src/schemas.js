import { schema } from 'normalizr';

export const bookSchema = new schema.Entity(
    "books", {}, { idAtteibute: "_id"}
);