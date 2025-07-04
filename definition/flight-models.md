---
title: Flight Trajectory Models
---

<style>
table, td {
  border: 1px solid #bfbdbd;
  border-collapse: collapse;
}
td {
  padding: 5px;
}
</style>



There are several trajectories of interest for the analysis of horizontal flight efficiency.

## FTFM or Model 1
Filed Tactical Flight Model, corresponding to the last filed flight plan (see also [FTFM][ftfm])

## CTFM or Model 3
Current Tactical Flight Model (see [CTFM][ctfm])

## CPF
Correlated Positions reports for a Flight, i.e., airspace profiles following as much as possible
the actual flown trajectory (based on radar positions - see [CPR][cpr]).

## CPG_GEN
Profiles generated by the CFMU path generation tool.

### SCR
Shortest Constrained Route. IFPS compliant route (available CDRs open and RAD compliant).

### SRR
Shortest RAD restrictions applied Route. All CDRs open.

### SUR
Shortest Unconstrained Route. No RAD applied, all CDRs open.

### DCT
Direct route. Any portion outside the FPM_AREA is “frozen”, i.e, not generated by the tool. 

## Comparisons

The comparison between values for different trajectories of the same flight provides indication
on the effects of different factors:

* **SUR vs DCT** provides a measure of the effects of route design, because it compares the
  shortest theoretical course with the best one available using the route network.
* **SUR vs SCR** provides a measure of the effects of route availability,
  because it compares the route potentially available on the route network with
  the one that could actually be filed.
* **FTFM vs SCR** provides a measure of the route utilisation by Aircraft Operators,
  because it compares the route actually filed to the best that could have been filed.
* **CPF vs FTFM** provides a measure of the effects of ATC
  because it compares the actual trajectory to the one that was filed.


## See Also

* [CDR](../acronym/cdr.md)
* [CPF](../acronym/cpf.md)
* [CPR](../acronym/cpr.md)
* [CTFM](../acronym/ctfm.md)
* [DCT](../acronym/dct.md)
* [FTFM](../acronym/ftfm.md)
* [SCR](../acronym/scr.md)
* [SRR](../acronym/srr.md)
* [SUR](../acronym/sur.md)
