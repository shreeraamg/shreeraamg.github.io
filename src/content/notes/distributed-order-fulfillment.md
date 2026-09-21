---
title: "An event-driven order fulfillment platform"
summary: "A personal project exploring a choreographed saga across five Spring Boot services."
category: "Distributed systems"
kind: personal
projectId: order-platform
contribution: "Built five Spring Boot microservices coordinated through Kafka events, with per-service databases, observability, and integration tests."
outcome: "A working project combining a choreographed saga, per-service PostgreSQL, OpenTelemetry, and Testcontainers-backed tests."
technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "OpenTelemetry", "Testcontainers"]
published: true
featured: true
order: 4
---

## The project

The Distributed Order Fulfillment Platform is a personal build organised as five Spring Boot microservices. It explores a choreographed saga: services coordinate through Kafka events rather than relying on a central workflow coordinator.

## What I built

Each service has its own PostgreSQL database. Kafka events connect the services, while OpenTelemetry provides observability and Testcontainers-backed integration tests exercise the implementation.

The project also includes Docker, Kubernetes, and Helm in its stack. The public repository is the source for implementation details.

## The engineering approach

The defining choice is event choreography. Each service participates in the workflow through events rather than a single service directing every step.

Per-service databases keep data ownership separate. That makes cross-service behaviour an explicit part of the design rather than treating the system as one shared database.

## Design considerations

An event-driven workflow is not the same as a single database transaction. Event ordering, retries, and partial failures are important considerations when reasoning about this kind of system.

Observability and integration testing are useful companions to this architecture because the behaviour spans service boundaries. These are design considerations, not a claim of production-scale validation.

## Explore the implementation

The source link above leads to the public repository. The Projects page also includes an interactive, conceptual walkthrough of the event flow.

This is a personal project, not a production deployment or an employer's internal platform.
