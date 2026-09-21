---
title: "Shared build tooling across 80+ services"
summary: "Centralising dependency versions and build conventions across 10 repositories."
category: "Developer experience"
kind: work
experienceId: tcs
contribution: "Designed a centralised Gradle BOM and convention plugin for dependency versions, configuration, and shared build logic."
outcome: "Reduced version-upgrade effort by 60% across 10 repositories covering 80+ microservices."
technologies: ["Gradle", "Java"]
published: true
featured: true
order: 2
---

## The problem

Version management, configuration, and build logic were repeated across 10 repositories covering more than 80 microservices. A change to shared dependencies or conventions meant revisiting similar configuration in multiple places.

## My contribution

I designed a centralised Gradle bill of materials (BOM) and a convention plugin to bring those repeated concerns into shared tooling.

The BOM provided a common place for dependency versions. The convention plugin captured shared configuration and build logic, reducing per-service boilerplate.

## The engineering decision

Dependency alignment and build behaviour are related but different concerns. A BOM addresses which dependency versions belong together; a convention plugin addresses how shared build configuration is applied.

Using both allowed version management and build conventions to be maintained as shared concerns instead of copied into each service.

## Outcome and scope

The reported outcome was a 60% reduction in version-upgrade effort and the elimination of repeated per-service boilerplate across the affected repositories.

The 60% figure refers to upgrade effort, not application performance or build duration. This public note does not include the internal measurement breakdown.

## Design considerations

Shared tooling creates a common change point. Its conventions need to remain understandable to the services that consume them, and shared changes need to be considered across those consumers.

Internal plugin code, dependency coordinates, and repository configuration are not included here.
