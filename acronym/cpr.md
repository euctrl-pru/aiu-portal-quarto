---
title: CPR - Correlated Position Report
slug: cpr
---

CPRs are positional reports that the [ATC](atc.md) surveillance systems transmit to [NM](nm-cfmu.md).
They are named "correlated" because the 4D position (longitude, latitude, altitude and timestamp)
is augmented with flight information such as CALLSIGN, [ADEP](adep.md),
[ADES](ades.md) and ICAO 24-bit address.
The positional data typically come from primary radar feeds (but they could be fused
with ADS-B/Mode S downlink messages.)

NM uses CPRs to update the trajectories of airborne flights in order to continuously
refresh the airspace occupancy counts in its area of responsibility.
[FMPs](fmp.md) can then evaluate whether the demand in their sectors/areas is above
capacity and eventually call for [ATFM measures](/definition/atfm-measure/).


## See Also

* {{< a_blank ectrl "Flight Data Services" "https://www.eurocontrol.int/service/data-distribution-service" >}}
* {{< a_blank skybrary "Call-sign" "https://skybrary.aero/articles/aircraft-call-sign" >}}
* {{< a_blank skybrary "Automatic Dependent Surveillance" "https://skybrary.aero/articles/automatic-dependent-surveillance-ads" >}}
* {{< a_blank skybrary "Mode S" "https://skybrary.aero/articles/mode-s" >}}
* {{< a_blank wiki "ICAO 24-bit address" "https://en.wikipedia.org/wiki/Aviation_transponder_interrogation_modes#ICAO_24-bit_address" >}}
