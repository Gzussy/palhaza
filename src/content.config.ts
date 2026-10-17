import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const latvanyossagokCollection = defineCollection({
    loader: glob({ pattern: '**.md', base: './src/content/latvanyossagok' }),
    schema: z.object({
        title: z.string(),
        kategoria: z.string(),
        ikon: z.string().optional().default("🏰"),
        leiras: z.string(),
        kepek: z.array(z.string()).optional().default([]),
    }),
});

const turakCollection = defineCollection({
    loader: glob({ pattern: '**.md', base: './src/content/turak' }),
    schema: z.object({
        title: z.string(),
        tav: z.string(),
        szint: z.string(),
        nehezseg: z.string(),
        leiras: z.string(),
        ikon: z.string().optional().default("🥾"),
        gpxLink: z.string().optional().default("#"),
        kepek: z.array(z.string()).optional().default([]),
    }),
});

const gasztroCollection = defineCollection({
    loader: glob({ pattern: '**.md', base: './src/content/gasztro' }),
    schema: z.object({
        title: z.string(),
        kategoria: z.string(),
        cim: z.string(),
        ikon: z.string().optional().default("🍽️"),
        leiras: z.string(),
    }),
});

const esemenyekCollection = defineCollection({
    loader: glob({ pattern: '**.md', base: './src/content/esemenyek' }),
    schema: z.object({
        title: z.string(),
        datum: z.string(),
        helyszin: z.string(),
        ikon: z.string().optional().default("📅"),
        leiras: z.string(),
    }),
});

const szallasokCollection = defineCollection({
    loader: glob({ pattern: '**.md', base: './src/content/szallasok' }),
    schema: z.object({
        title: z.string(),
        tipus: z.string(),
        kapacitas: z.string(),
        tel: z.string(),
        leiras: z.string(),
        ikon: z.string().optional().default("🏡"),
        kepek: z.array(z.string()).optional().default([]), // Képek útvonalainak tömbje
    }),
});

export const collections = {
    'latvanyossagok': latvanyossagokCollection,
    'turak': turakCollection,
    'gasztro': gasztroCollection,
    'esemenyek': esemenyekCollection,
    'szallasok': szallasokCollection,
};