---
title: "Shared build tooling across 80+ services"
summary: "Using version catalogs, a BOM, and a convention plugin to centralise dependency management and shared build behaviour."
category: "Developer experience"
kind: work
experienceId: tcs
contribution: "Designed shared Gradle tooling around version catalogs, a bill of materials (BOM), and a convention plugin to reduce repeated dependency and build configuration."
outcome: "Reduced version-upgrade effort by 60% across 10 repositories covering 80+ microservices."
technologies: ["Gradle", "Java", "Spring Boot"]
published: true
featured: true
order: 2
---

## The problem

Service builds across multiple repositories repeated many of the same decisions: dependency versions, common configuration, and build behaviour.

The application code differed, but much of the Gradle configuration did not. Updating a shared dependency or changing a build convention meant revisiting similar configuration across repositories, with room for those builds to drift apart.

The goal was to make the common parts reusable without forcing every service to have an identical build.

## My contribution

I designed and integrated shared build tooling around three Gradle capabilities: version catalogs, a BOM, and a convention plugin.

This moved repeated dependency and build decisions into maintained components. Service modules could focus on the libraries they needed and the behaviour specific to their application.

## Three tools, three responsibilities

### Version catalogs: consistent dependency and plugin references

Version catalogs provided named references and explicit version selection for dependencies and plugins. This made build files easier to read and reduced scattered version declarations.

### The BOM: a shared dependency baseline

A bill of materials aligned managed dependency versions across services. Consuming builds could declare those dependencies without repeating an individual version for each one.

The catalog made dependencies easier to reference; the BOM supplied their shared version baseline.

### The convention plugin: how services are built

The convention plugin captured common configuration and build logic, including shared defaults for testing, code-quality checks, and application packaging.

This was more than a starter template to copy into a new repository. Services applied a versioned plugin, so changes to shared behaviour could be maintained and released centrally.

## What stayed in the services

Services retained their application-specific dependencies and configuration. Shared tooling handled the common baseline, while individual builds remained able to express their own requirements.

The boundary was intentional: centralise repeated policy, keep service-specific requirements close to the service. Reuse did not mean eliminating every line of local Gradle configuration.

## A simpler upgrade path

Rather than editing the same dependency versions or build settings in multiple modules, a shared change could be maintained in the common tooling and published as a release. Each consuming repository could then select the update and validate its services against it.

Explicit version selection also meant repositories could adopt changes at different times. Publishing an update made it available; it did not silently upgrade every consumer.

## Impact

Across 10 repositories covering 80+ microservices, the shared tooling reduced version-upgrade effort by 60% and reduced repeated per-service build boilerplate.

The improvement was in the work needed to manage version upgrades, not application response times or build execution speed.

## Design considerations

Shared tooling creates a common change point, so a convenient default can affect many consumers. Changes need compatibility checks in representative service builds before wider adoption.

Explicit version selection makes upgrades deliberate, but also means adoption needs to be coordinated to avoid services drifting onto different baselines.

The useful balance is a predictable shared baseline with visible exceptions, rather than duplicated configuration or an inflexible build that every service has to work around.
