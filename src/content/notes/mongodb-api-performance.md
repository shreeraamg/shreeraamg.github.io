---
title: "Improving MongoDB-backed API response times"
summary: "Optimising aggregation pipelines and adding targeted indexes for the affected APIs."
category: "Database performance"
kind: work
experienceId: tcs
contribution: "Optimised MongoDB aggregation pipelines and added targeted indexing."
outcome: "Reduced response times by 70% for the APIs involved in this optimisation."
technologies: ["MongoDB", "Aggregation pipelines", "Indexing"]
published: false
featured: false
order: 3
---

## The problem

MongoDB-backed APIs needed faster response times. The contribution focused on their aggregation pipelines and indexing, rather than presenting a general claim about every API or database workload.

## My contribution

I optimised the aggregation pipelines and added targeted indexes. These were complementary parts of the same performance improvement: how the queries expressed their work, and how the database could access the data needed for that work.

## The engineering decision

The approach addressed the query and its access paths together. An index is not a substitute for considering what an aggregation pipeline asks the database to do, and a pipeline should be considered in the context of the indexes available to it.

## Outcome and scope

The reported result was a 70% reduction in API response times for this optimisation.

This note does not publish the internal query shapes, datasets, baseline timings, or measurement conditions. The percentage should not be read as a promise that the same change would produce the same result on another workload.

## Design considerations

Indexing has trade-offs: additional indexes consume storage and add work to writes. A useful performance improvement needs to fit the workload, not just make an isolated query faster.

The public description is deliberately limited to the contribution and its reported outcome. Internal schemas, queries, and data are not included.
