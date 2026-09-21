---
title: "One image, 60+ production integrations"
summary: "Migrating HTTP-to-HTTP interfaces to production using one reusable Spring Boot image and independent, configuration-driven deployments."
category: "Integration architecture"
kind: work
experienceId: tcs
contribution: "Built a reusable Spring Boot HTTP-to-HTTP integration application and migrated 60+ interfaces to production, externalising interface settings and XSD/XSL resources through Helm and ConfigMaps."
outcome: "60+ HTTP-to-HTTP interfaces migrated to production, with the same approach adopted for two additional production integration patterns."
technologies: ["Java", "Spring Boot", "Docker", "Helm", "Kubernetes", "XSD", "XSLT", "Azure Service Bus"]
published: true
featured: true
order: 1
---

## The problem

At my organisation, IBM App Connect Enterprise (ACE) supports business-to-business (B2B) data exchange with third-party brands and business partners, both sending data to them and receiving data from them. These partner-facing integrations are referred to as **B2B ACE**.

The existing IBM ACE integration approach produced interface-specific container images with configuration and integration resources included at build time. Even where interfaces followed a common pattern, their differences were carried into separate image artefacts.

That coupled interface configuration to application packaging. A configuration or transformation change could require another image build rather than just an update to deployment configuration.

The problem was not that each integration needed its own deployment. Separate deployments can be useful. The unnecessary coupling was between what varied per interface and what had to be built into an image.

## My contribution

I built a reusable Spring Boot application for the HTTP-to-HTTP integration pattern and migrated 60+ interfaces to production, with deployment-specific behaviour supplied through configuration.

The application is packaged as one reusable container image, deployed multiple times. Each deployment receives its own interface settings through Helm-templated environment variables and its XSD/XSL resources through mounted ConfigMaps.

The result is shared application code and packaging, not one shared running service for every integration.

## The engineering decision

I separated three concerns:

- **Application image:** the reusable implementation of the supported integration behaviour.
- **Deployment configuration:** the settings that distinguish one deployment from another.
- **Validation and transformation resources:** XSD/XSL files supplied separately from the application image.

This makes the distinction between reuse and consolidation explicit: the build artefact is reused; the deployments remain separate. Different deployments can use the same image version without sharing one runtime instance.

For behaviour already supported by the application, changing external configuration or XSD/XSL resources does not require rebuilding the image. It still requires an appropriate deployment update and validation. A change to application logic still requires a new image.

## Production impact

60+ HTTP-to-HTTP interfaces were migrated and deployed to production using the reusable-image approach. Interface-specific configuration moved out of individual image builds and into deployment configuration.

This replaced per-interface image packaging with a shared application artefact while retaining separate deployments. Configuration and XSD/XSL changes for supported behaviour could be delivered through Helm and ConfigMaps without rebuilding the application image.

## Adoption across integration patterns

The same reusable-image and externalised-configuration approach was also adopted for two other integration patterns, both deployed to production:

- **Azure Service Bus to HTTP**
- **HTTP to Azure Service Bus**

My HTTP-to-HTTP implementation established the approach; these additional patterns extended its adoption. The shared design separates application packaging from deployment-specific configuration while preserving each pattern's protocol-specific behaviour.

## Design considerations

Reusing an image does not remove interface-specific testing. Configuration, transformation files, and the chosen image version need to work together for each deployment.

Separate deployments preserve independent rollout and scaling boundaries, but a change to shared application code still needs compatibility checks across its consumers. Reuse reduces duplicated packaging; it does not make all integrations identical.

Externalised files also need an explicit update strategy. A configuration change should not be described as automatic hot reloading unless the application actually supports it.

This note describes the approach at a high level. Internal source code, configuration values, payloads, and system diagrams are not included.
