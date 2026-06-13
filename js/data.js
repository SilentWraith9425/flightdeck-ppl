// FlightDeck PPL — Gleim Study Guide Data (SGs 1-10)
// Source: Gleim Online Ground School, Pilot Cert 2 folder

const STUDY_GUIDES = [
  {
    id: 1,
    title: "Airplanes and Aerodynamics",
    stage: 1,
    icon: "✈",
    description: "Aircraft structures, flight controls, aerodynamic principles, and stability.",
    driveId: "1c60QGyqPLQ9Eud4lLRujN--Tb3l64Wr5",
    flashcards: [
      { front: "What are the three types of fuselage construction?", back: "Truss, monocoque, and semi-monocoque. Semi-monocoque is most common — uses bulkheads, longerons, stringers, and a stressed outer skin to share stress loads." },
      { front: "What is the difference between nosewheel and tailwheel aircraft?", back: "Nosewheel (tricycle gear): third wheel under the nose. Tailwheel (conventional): third wheel under the tail. Nosewheel is more common in modern training aircraft." },
      { front: "What are the four forces acting on an airplane in flight?", back: "Lift (upward), Weight/Gravity (downward), Thrust (forward), Drag (rearward). In steady level flight, Lift = Weight and Thrust = Drag." },
      { front: "What is angle of attack (AOA)?", back: "The angle between the wing's chord line and the relative wind. As AOA increases, lift increases — until the critical angle of attack is reached and the wing stalls." },
      { front: "What is the critical angle of attack?", back: "The AOA at which the wing stalls (airflow separates from upper surface). Usually 18-20°. A stall occurs at the SAME critical AOA regardless of airspeed, weight, or bank angle." },
      { front: "What are the three axes of an airplane?", back: "Longitudinal (nose to tail) → roll. Lateral (wingtip to wingtip) → pitch. Vertical (top to bottom through CG) → yaw. All three axes pass through the center of gravity." },
      { front: "What controls roll, pitch, and yaw?", back: "Roll → ailerons. Pitch → elevator (or stabilator). Yaw → rudder." },
      { front: "What is adverse yaw?", back: "When ailerons deflect for a turn, the descending aileron (outside wing) creates more drag than the rising aileron, causing the nose to yaw OPPOSITE the direction of turn." },
      { front: "What is P-factor?", back: "Asymmetric propeller thrust at high AOA: the descending blade (right side) has a greater AOA than the ascending blade, producing more thrust and causing left-yaw tendency." },
      { front: "What is torque effect?", back: "Newton's 3rd law: the clockwise-rotating propeller (as seen from pilot) creates an equal counterclockwise reaction on the airframe, tending to roll the airplane left." },
      { front: "What is a semi-monocoque fuselage?", back: "Uses bulkheads, formers, longerons, stringers, and a stressed outer skin. The skin shares the stress loads with the internal framework. Most common modern aircraft construction." },
      { front: "What is the purpose of flaps?", back: "Secondary flight controls that increase both lift and drag, allowing slower approach/landing speeds by increasing wing camber and area. Extended in stages for different phases of approach." },
      { front: "Positive static stability means:", back: "The aircraft has an initial tendency to RETURN to its original trimmed attitude after a displacement. Most desirable in training aircraft." },
      { front: "What is a monocoque fuselage?", back: "Little or no internal bracing (only bulkheads). The outer skin bears the primary stress loads — like an aluminum beverage can. Challenged by maintaining strength while controlling weight." },
    ],
    quiz: [
      {
        q: "What type of fuselage construction uses bulkheads, longerons, and a stressed outer skin to share stress loads?",
        opts: ["Truss type", "Monocoque type", "Semi-monocoque type", "Space frame type"],
        ans: 2,
        exp: "Semi-monocoque uses bulkheads, longerons, stringers, and a stressed outer skin. No single piece is failure-critical. It is the most common modern aircraft fuselage design."
      },
      {
        q: "A wing always stalls at:",
        opts: ["The same critical angle of attack, regardless of airspeed", "A higher AOA at higher airspeeds", "A lower AOA at lower airspeeds", "An AOA that varies with aircraft weight"],
        ans: 0,
        exp: "A wing stalls at the same critical AOA every time. Only the airspeed at which that AOA is reached changes with weight, load factor, and configuration."
      },
      {
        q: "Which control surface controls movement around the VERTICAL axis (yaw)?",
        opts: ["Ailerons", "Elevator", "Rudder", "Stabilator"],
        ans: 2,
        exp: "The rudder controls yaw (rotation around the vertical axis). Ailerons control roll (longitudinal axis). Elevator controls pitch (lateral axis)."
      },
      {
        q: "Adverse yaw during aileron input is caused by:",
        opts: ["The rising wing generating more lift than the descending wing", "The down aileron creating more drag on the outside wing, yawing the nose opposite the turn", "Gyroscopic precession from the propeller", "Increased AOA on the inside wing during turns"],
        ans: 1,
        exp: "The descending (outside) aileron creates more drag than the rising aileron, causing the nose to yaw AWAY from the direction of turn. Rudder pressure corrects adverse yaw."
      },
      {
        q: "P-factor causes a left-yaw tendency because:",
        opts: ["The propeller rotates counterclockwise as seen from the pilot", "At high AOA, the descending blade has a greater AOA, producing more thrust on the right side", "Engine torque pushes the nose left", "Gyroscopic precession during climbs yaws the nose left"],
        ans: 1,
        exp: "P-factor (asymmetric thrust): at high AOA, the downward-moving blade on the right has a greater effective AOA and produces more thrust than the upward-moving blade on the left, pulling the nose left."
      },
      {
        q: "Flaps increase aircraft performance by:",
        opts: ["Increasing only lift", "Increasing only drag", "Increasing both lift and drag", "Decreasing both lift and drag"],
        ans: 2,
        exp: "Flaps increase both lift and drag by increasing the wing's camber. They allow slower approach speeds but also create significant drag, especially at full deflection."
      },
      {
        q: "Positive static stability in an aircraft means:",
        opts: ["The aircraft oscillates indefinitely after displacement", "The aircraft tends to return to its original attitude after displacement", "The aircraft continues to diverge from its original attitude", "Static stability only applies to the longitudinal axis"],
        ans: 1,
        exp: "Positive static stability means the initial tendency after a displacement is to return toward the original attitude. This is the desired characteristic for training aircraft."
      },
      {
        q: "The longitudinal axis of an airplane runs:",
        opts: ["From nose to tail; rotation around it is roll", "From wingtip to wingtip; rotation is pitch", "Vertically through the CG; rotation is yaw", "Parallel to the chord line of the wing"],
        ans: 0,
        exp: "The longitudinal axis runs from nose to tail. Rotation around it is called roll, controlled by ailerons. All three axes intersect at the center of gravity."
      },
      {
        q: "A nosewheel landing gear configuration is also called:",
        opts: ["Conventional gear", "Tricycle gear", "Retractable gear", "Tailwheel gear"],
        ans: 1,
        exp: "Nosewheel aircraft are called tricycle gear (three wheels: two main, one nosewheel). Tailwheel aircraft are called conventional or 'taildragger' aircraft."
      },
      {
        q: "Torque effect on a single-engine airplane with a clockwise propeller (as seen from the pilot) tends to roll the airplane:",
        opts: ["To the right", "To the left", "Depends on airspeed", "Nose forward"],
        ans: 1,
        exp: "By Newton's 3rd law, the clockwise rotation of the propeller creates an equal and opposite counterclockwise reaction on the airframe, tending to roll the airplane left."
      },
    ]
  },
  {
    id: 2,
    title: "Airplane Instruments, Engines, and Systems",
    stage: 1,
    icon: "⊙",
    description: "Pitot-static instruments, gyroscopic instruments, compass errors, engines, and systems.",
    driveId: "1VTKorUT505EkZK3Pb_SoTf97hP0C19Lz",
    flashcards: [
      { front: "What instruments use the pitot-static system?", back: "Airspeed Indicator (ASI), Altimeter, and Vertical Speed Indicator (VSI). The ASI uses both pitot and static; the altimeter and VSI use static only." },
      { front: "What is compass deviation?", back: "The error caused by local magnetic fields within the aircraft (wiring, avionics, structural steel) deflecting the compass needle from true magnetic north. Changes with heading; recorded on the compass correction card." },
      { front: "What are compass northerly turning errors?", back: "When turning through NORTH, the compass LAGS (undershoots). When turning through SOUTH, the compass LEADS (overshoots). Remember: NOSE — North Overshoot, South Exceed (lead past south, lag at north)." },
      { front: "What is the acceleration/deceleration compass error? (ANDS)", back: "ANDS: Accelerate North, Decelerate South. On an easterly or westerly heading, acceleration causes the compass to show a turn toward north; deceleration shows a turn toward south." },
      { front: "What are the three gyroscopic instruments?", back: "Attitude Indicator (AI) — pitch and bank. Heading Indicator (HI) — directional gyro. Turn Coordinator / Turn and Slip — rate of turn and coordination." },
      { front: "Why must the heading indicator be periodically realigned?", back: "The gyroscope precesses (drifts) due to mechanical friction and the Earth's rotation. Realign with the magnetic compass every 15 minutes during straight-and-level, unaccelerated flight." },
      { front: "What causes carburetor icing and when is it most likely?", back: "Fuel vaporization and the venturi effect drop carburetor temperature 40-70°F below ambient. Most likely between 20°F and 70°F with high humidity — even on a clear day." },
      { front: "Effect of a blocked pitot tube (static open):", back: "ASI freezes at the reading when blocked. At higher altitude, ASI may read higher (less static pressure inside, same trapped pitot). Altimeter and VSI still function normally." },
      { front: "Effect of a blocked static port:", back: "Altimeter freezes. VSI shows zero. ASI becomes unreliable. Use alternate static source (cockpit air) — note: instruments will show slight errors (altimeter reads slightly high, ASI reads slightly fast)." },
      { front: "What is gyroscopic precession?", back: "A force applied to a spinning gyroscope results in a reaction 90° ahead in the direction of rotation. Causes HI drift; also creates flight forces during maneuvers with a spinning propeller." },
      { front: "What does a magneto system do?", back: "Generates high-voltage electrical current to fire spark plugs. Aircraft have dual magnetos (left and right) for redundancy. Self-contained; does NOT require the aircraft's electrical system." },
      { front: "What is carburetor heat?", back: "Routes heated air from around the exhaust into the carburetor to melt ice and prevent formation. Temporarily reduces power (hot air is less dense). Use at full heat — partial heat can worsen icing." },
    ],
    quiz: [
      {
        q: "Which instruments use the pitot-static system?",
        opts: ["Attitude indicator, heading indicator, turn coordinator", "Airspeed indicator, altimeter, vertical speed indicator", "Airspeed indicator, altimeter, attitude indicator", "Altimeter, turn coordinator, vertical speed indicator"],
        ans: 1,
        exp: "The pitot-static system powers: ASI (pitot + static), Altimeter (static only), and VSI (static only). Gyroscopic instruments (AI, HI, TC) are powered by vacuum or electricity."
      },
      {
        q: "Compass deviation error is caused by:",
        opts: ["The difference between true north and magnetic north", "Local magnetic fields within the aircraft", "Turning through cardinal headings at speed", "Acceleration and deceleration on easterly/westerly headings"],
        ans: 1,
        exp: "Deviation is caused by magnetic disturbances inside the aircraft — wiring, avionics, steel structure. It varies with heading and is recorded on the compass correction card in the cockpit."
      },
      {
        q: "Carburetor icing is most likely at an OAT of:",
        opts: ["Below -10°C with very low humidity", "Between approximately -7°C (20°F) and 21°C (70°F) with high humidity", "Only above 30°C in hot weather", "Only in visible moisture (rain, clouds)"],
        ans: 1,
        exp: "Carburetor icing can form from 20°F to 70°F with high humidity. The venturi effect and fuel vaporization cool the carb throat 40-70°F below ambient — making icing possible on a clear, cool day."
      },
      {
        q: "When turning from a southerly heading, the magnetic compass will:",
        opts: ["Lag behind the turn", "Lead ahead of the turn (overshoot)", "Indicate correctly throughout the turn", "Stick at 180° during the turn"],
        ans: 1,
        exp: "Turning through south: the compass leads/overshoots — you must STOP the turn before 180° appears on the compass. Turning through north: compass lags — you overshoot past 360° before stopping."
      },
      {
        q: "If the pitot tube becomes blocked but the static port remains open, the ASI will:",
        opts: ["Read zero", "Freeze at the airspeed when blocked and may drift with altitude changes", "Fluctuate rapidly", "Continue to read accurately"],
        ans: 1,
        exp: "With a blocked pitot tube and open static port, the trapped pitot pressure doesn't change. As the aircraft climbs (lower static), the ASI may actually read higher than actual. The ASI essentially freezes and becomes unreliable."
      },
      {
        q: "Why do aircraft engines have dual magnetos?",
        opts: ["To increase horsepower output", "For redundancy — engine operates on either magneto alone", "To power the aircraft's avionics", "To reduce carburetor icing risk"],
        ans: 1,
        exp: "Each magneto fires one spark plug per cylinder. If one magneto fails, the engine continues on the other (with slight power reduction). During run-up, each is tested separately to confirm independent operation."
      },
      {
        q: "The alternate static source in most unpressurized aircraft draws air from:",
        opts: ["A separate outside static port", "Inside the cockpit", "The pitot tube", "An oxygen system port"],
        ans: 1,
        exp: "The alternate static source typically draws cockpit cabin air. Cockpit pressure is slightly lower than outside (due to airflow), causing instruments to read slightly in error: altimeter slightly high, ASI slightly fast, VSI briefly shows a climb."
      },
      {
        q: "Gyroscopic precession means that a force applied to a spinning gyro results in a reaction:",
        opts: ["Directly opposite the applied force", "90° ahead in the direction of rotation", "180° from the point of application", "In the same direction as the applied force"],
        ans: 1,
        exp: "Gyroscopic precession: the resultant force appears 90° ahead in the direction of rotation. This is why heading indicators precess over time and why propeller gyroscopic effects appear in specific axes during pitch/yaw maneuvers."
      },
      {
        q: "The heading indicator must be periodically realigned with the magnetic compass because:",
        opts: ["Magnetic variation changes with position", "The gyroscope precesses due to friction and Earth's rotation", "The compass has acceleration errors", "The HI is affected by temperature changes"],
        ans: 1,
        exp: "The HI's gyroscope slowly drifts (precesses) due to mechanical bearing friction and the apparent motion caused by Earth's rotation. Realign every 15 minutes during straight, unaccelerated flight using the magnetic compass."
      },
      {
        q: "A blocked static port causes the VSI to:",
        opts: ["Read zero regardless of actual vertical speed", "Read double the actual vertical speed", "Fluctuate rapidly between climbs and descents", "Show only climbs, not descents"],
        ans: 0,
        exp: "With a blocked static port, no pressure change can reach the VSI's static side. The VSI will show zero regardless of actual vertical speed. The altimeter freezes and the ASI becomes unreliable as well."
      },
    ]
  },
  {
    id: 3,
    title: "Airports, Air Traffic Control, and Airspace",
    stage: 1,
    icon: "◈",
    description: "Airport markings, signs, ATC procedures, and airspace classifications with weather minimums.",
    driveId: "1kfgMUqDp8YcbaeUxtZZ2gR6N4Z-4PL5r",
    flashcards: [
      { front: "What is a displaced threshold?", back: "A threshold that is NOT at the beginning of the pavement. The area before it may be used for taxi, takeoff, and landing ROLLOUT from the opposite direction — but NOT for landing in the threshold's direction." },
      { front: "What is a relocated threshold?", back: "A threshold TEMPORARILY moved due to construction or maintenance. White arrows on the centerline lead to the new threshold. The paved area before it is also not usable for landing in that direction." },
      { front: "What marks the displaced threshold area?", back: "White centerline arrows along the pre-threshold pavement, white arrowheads just before the threshold bar, then a solid white threshold bar across the full runway width." },
      { front: "What do yellow chevrons on a runway indicate?", back: "Surface NOT usable for aircraft operations — beyond the usable runway end or in an overrun area." },
      { front: "What are runway touchdown zone markings?", back: "Groups of 1, 2, and 3 rectangular bars on each side of centerline, providing distance information in 500-ft increments from the threshold. Found on precision instrument runways." },
      { front: "How is a runway number determined?", back: "The runway number = the magnetic direction of the runway, rounded to the nearest 10°, then divided by 10. Example: runway aligned at 270° magnetic = Runway 27." },
      { front: "What are Class B airspace VFR requirements?", back: "ATC clearance required to enter. Minimum 3 SM visibility. Clear of clouds (no specific cloud clearances). At least private pilot certificate (or student with logbook endorsement)." },
      { front: "What are Class C airspace VFR requirements?", back: "Two-way radio communication with ATC before entry. 3 SM visibility. 500 ft below, 1,000 ft above, 2,000 ft horizontal from clouds. Transponder with altitude encoding required." },
      { front: "What are Class G airspace VFR minimums (below 1,200 ft AGL, day)?", back: "1 SM visibility and clear of clouds. The most permissive VFR minimums in the NAS." },
      { front: "What is an alert area?", back: "Airspace with high volumes of pilot training or unusual aeronautical activity. No ATC clearance required. ALL pilots (transiting and participating) are responsible for collision avoidance." },
      { front: "What is a precision instrument runway?", back: "Served by a precision approach (e.g., ILS). Has the most comprehensive markings: threshold, aiming point, touchdown zone markings, centerline, and side stripes." },
      { front: "Three parallel runways are designated as:", back: "L (left), C (center), R (right), as seen from the approach direction. Two parallel runways use only L and R." },
    ],
    quiz: [
      {
        q: "The area before a displaced threshold may be used for:",
        opts: ["Landing only", "Takeoff only", "Taxiing, takeoff, and landing rollout from the opposite direction — but NOT landing toward the threshold", "No aircraft operations"],
        ans: 2,
        exp: "The pre-displaced-threshold area is available for taxi, takeoff in that direction, and rollout from the opposite direction. It may NOT be used for landing toward the displaced threshold."
      },
      {
        q: "Runway 27 corresponds to a magnetic direction of approximately:",
        opts: ["27°", "207°", "270°", "720°"],
        ans: 2,
        exp: "Runway numbers = magnetic direction rounded to nearest 10°, divided by 10. Runway 27 = 270° magnetic (facing west). The reciprocal end would be Runway 09 (090°)."
      },
      {
        q: "Yellow chevrons on a runway indicate:",
        opts: ["The touchdown zone", "Pavement not suitable for aircraft operations", "The runway's usable overrun area", "Beginning of the displaced threshold"],
        ans: 1,
        exp: "Yellow chevrons mark areas of pavement that are NOT usable for aircraft operations — typically beyond the usable runway end, in blast pads, or overrun areas."
      },
      {
        q: "Touchdown zone markings on a precision runway provide:",
        opts: ["ILS glideslope reference points", "Distance information in 500-ft increments from the threshold", "Marking for the 1,000-ft aiming point", "Wind direction indicators"],
        ans: 1,
        exp: "Touchdown zone markings — groups of 1, 2, and 3 rectangular bars — are coded to show distance from the threshold in 500-ft increments, helping pilots judge where they'll touch down."
      },
      {
        q: "To fly VFR within Class B airspace, a pilot must have:",
        opts: ["An IFR rating and filed flight plan", "ATC clearance, 3 SM visibility, and remain clear of clouds", "3 SM visibility and 500/1000/2000 cloud clearances", "Only a two-way radio and altitude-encoding transponder"],
        ans: 1,
        exp: "Class B requires: ATC clearance to enter, at least a student pilot certificate with endorsement (or private pilot), 3 SM visibility, and clear of clouds. Standard cloud clearances do NOT apply in Class B."
      },
      {
        q: "In Class C airspace, the minimum flight visibility is:",
        opts: ["1 SM", "3 SM", "5 SM", "Clear of clouds"],
        ans: 1,
        exp: "Class C airspace requires 3 SM visibility and cloud clearances of 500 ft below, 1,000 ft above, and 2,000 ft horizontal. Two-way radio communication must be established before entry."
      },
      {
        q: "Class G airspace below 1,200 ft AGL during the day requires:",
        opts: ["3 SM visibility and 500/1000/2000 cloud clearances", "1 SM visibility and clear of clouds", "3 SM visibility and clear of clouds", "1 SM visibility and 500 ft from all clouds"],
        ans: 1,
        exp: "The most permissive VFR minimum: 1 SM visibility and clear of clouds in Class G below 1,200 ft AGL during the day. This reflects the uncontrolled nature of Class G airspace."
      },
      {
        q: "An alert area differs from restricted airspace because:",
        opts: ["Alert areas have altitude limits; restricted areas don't", "Alert areas require no ATC clearance; pilots are responsible for collision avoidance", "Alert areas are only active on weekends", "Alert areas require notification to ATC before entry"],
        ans: 1,
        exp: "Alert areas require no clearance. They notify pilots of areas with high pilot training activity or unusual aeronautical operations. All aircraft — both participating and transiting — are responsible for see-and-avoid."
      },
      {
        q: "What marks the beginning of a displaced threshold?",
        opts: ["Large red X's on the pavement", "White arrows along the centerline leading to arrowheads then a white threshold bar", "Yellow chevrons across the runway", "A solid yellow bar across the pavement width"],
        ans: 1,
        exp: "Displaced threshold: white arrows along the centerline in the pre-threshold area → white arrowheads immediately before the threshold → solid white threshold bar across the runway width."
      },
      {
        q: "A non-precision instrument runway is served by:",
        opts: ["ILS (instrument landing system)", "A non-precision approach with no electronic glide slope", "VFR traffic pattern only", "Military precision approach radar (PAR)"],
        ans: 1,
        exp: "A non-precision instrument runway has a non-precision approach (e.g., VOR, NDB, LNAV) — there is no electronic vertical guidance (glide slope). A precision runway has ILS with both lateral and vertical guidance."
      },
    ]
  },
  {
    id: 4,
    title: "Federal Aviation Regulations",
    stage: 1,
    icon: "§",
    description: "14 CFR Parts 1, 61, and 91 — definitions, pilot certification, and operating rules.",
    driveId: "1kpA6eCjX79K6LRtEclCt2a9vhpsG_4ek",
    flashcards: [
      { front: "What documents must be aboard an aircraft? (ARROW)", back: "Airworthiness certificate, Registration, Radio station license (international only), Operating handbook (POH/AFM), Weight and balance data." },
      { front: "What is 'ceiling' per 14 CFR Part 1?", back: "The height above Earth's surface of the lowest layer of clouds reported as broken (BKN) or overcast (OVC), or an obscuration — NOT classified as thin or partial." },
      { front: "What is 'decision height (DH)'?", back: "The height AGL at which a decision must be made on a precision instrument approach to continue or execute a missed approach. Also called decision altitude (DA) in feet MSL." },
      { front: "What is a 'controlled firing area'?", back: "Established to contain hazardous activities. Operations are SUSPENDED when an approaching aircraft is detected (by spotter, radar, or lookout). No NOTAM or ATC clearance required to transit." },
      { front: "Minimum age for private pilot certificate:", back: "17 years old for a private pilot certificate (airplane). 16 for gliders and balloons. 16 for student pilot solo in powered aircraft; 14 for gliders and balloons." },
      { front: "Passenger carrying currency requirements:", back: "3 takeoffs and 3 full-stop landings within the preceding 90 days in the same category, class, and type (if type rating required). Night passenger currency requires 3 full-stop landings at night within 90 days." },
      { front: "Alcohol rules under 14 CFR 91.17:", back: "No alcohol within 8 hours of acting as pilot/crew. Blood alcohol < 0.04%. Cannot be 'under the influence' regardless of elapsed time. The most restrictive rule applies." },
      { front: "What is 'flight time' per 14 CFR?", back: "Pilot time commencing when the aircraft moves under its own power for the purpose of flight, ending when it comes to rest after landing. Taxi time counts as flight time." },
      { front: "What medical is required for private pilot privileges?", back: "Third-class medical certificate. Valid: under 40 years old → 60 months. 40 and older → 24 months. BasicMed may substitute under 14 CFR 61.113 with certain restrictions." },
      { front: "What are 'commercial operator' requirements?", back: "A person who uses an aircraft to transport persons or property for compensation or hire. If the operation is merely incidental to another business (not a major profit enterprise), may not qualify as commercial operator." },
      { front: "What is 'controlled airspace'?", back: "Airspace of defined dimensions where ATC service is provided to IFR flights and to VFR flights according to airspace classification. Includes Classes A, B, C, D, and E." },
      { front: "How long is a 3rd class medical valid (pilot < 40)?", back: "60 calendar months (5 years) for pilots under 40. For pilots 40 and older: 24 calendar months (2 years)." },
    ],
    quiz: [
      {
        q: "Which acronym helps remember required aircraft documents?",
        opts: ["IMSAFE", "ARROW", "PAVE", "DECIDE"],
        ans: 1,
        exp: "ARROW: Airworthiness certificate, Registration, Radio station license (international), Operating handbook, Weight and balance data. These must be aboard for each flight."
      },
      {
        q: "How is 'ceiling' defined under 14 CFR Part 1?",
        opts: ["Any clouds above 3,000 ft AGL", "The height of the lowest BKN or OVC layer (or obscuration) above Earth's surface", "The maximum altitude an aircraft may legally fly", "Any cloud covering more than 3/8 of the sky"],
        ans: 1,
        exp: "Ceiling = the height AGL of the lowest cloud layer reported as broken (5/8-7/8 coverage) or overcast (8/8), or an obscuration. Scattered layers (3/8-4/8) do NOT constitute a ceiling."
      },
      {
        q: "Under 14 CFR 91.17, a pilot may not act as PIC within how many hours of consuming alcohol?",
        opts: ["4 hours", "8 hours", "12 hours", "24 hours"],
        ans: 1,
        exp: "The '8-hour rule': no alcohol within 8 hours of flight. Additionally, blood alcohol must be below 0.04%, and a pilot cannot be 'under the influence' even after 8 hours. All three limits apply simultaneously."
      },
      {
        q: "Minimum age to receive a private pilot certificate (airplane):",
        opts: ["14 years", "16 years", "17 years", "18 years"],
        ans: 2,
        exp: "Private pilot certificate: minimum 17 years old. Student pilot solo: 16 years old (powered aircraft). Balloon/glider solo: 14 years old. Private certificate for glider/balloon: 16 years old."
      },
      {
        q: "To carry passengers during the day, a pilot must have made at least 3 full-stop landings within the preceding:",
        opts: ["30 days", "60 days", "90 days", "6 months"],
        ans: 2,
        exp: "14 CFR 61.57: to carry passengers, 3 takeoffs and 3 full-stop landings in the same category/class in the preceding 90 days. Night passenger ops require 3 night full-stop landings in the same 90-day window."
      },
      {
        q: "'Decision height' is defined as:",
        opts: ["Minimum descent altitude on a non-precision approach", "The height AGL for a go/no-go decision on a precision instrument approach", "Maximum altitude for VFR flight in Class E", "The altitude to begin descent on a visual approach"],
        ans: 1,
        exp: "Decision height (DH) is the height above the touchdown zone at which a pilot must decide during a precision approach (ILS) to either land or execute a missed approach. It may also be expressed as DA (decision altitude) in feet MSL."
      },
      {
        q: "A controlled firing area is different from restricted airspace because:",
        opts: ["It requires an ATC clearance to enter", "Operations within it stop when an approaching aircraft is detected", "It appears on sectional charts in blue", "It is only active when the military requests it"],
        ans: 1,
        exp: "Controlled firing areas suspend all hazardous activities when an aircraft is spotted approaching. Because operations stop for transiting aircraft, no NOTAM or clearance is required — unlike restricted areas."
      },
      {
        q: "Flight time under 14 CFR begins when:",
        opts: ["The pilot starts the engine", "The aircraft moves under its own power for the purpose of flight", "The aircraft lifts off the runway", "ATC clears the aircraft for takeoff"],
        ans: 1,
        exp: "Flight time begins when the aircraft first moves under its own power for the purpose of flight (taxi begins) and ends when the aircraft comes to rest after landing. Taxi counts."
      },
      {
        q: "A third-class medical certificate is valid for how long for a pilot who is 38 years old?",
        opts: ["24 calendar months", "36 calendar months", "48 calendar months", "60 calendar months"],
        ans: 3,
        exp: "For private pilot privileges, a 3rd-class medical is valid 60 calendar months (5 years) for pilots UNDER 40. For pilots 40 and older, it's valid only 24 calendar months (2 years)."
      },
      {
        q: "Which airspace classes constitute 'controlled airspace'?",
        opts: ["Class A, B, and C only", "Class A, B, C, D, and E", "Class B, C, and D only", "All airspace above 700 ft AGL"],
        ans: 1,
        exp: "Controlled airspace is a generic term covering Classes A, B, C, D, and E. Class G is the only uncontrolled airspace. In controlled airspace, ATC provides some level of service to participating flights."
      },
    ]
  },
  {
    id: 5,
    title: "Airplane Performance and Weight & Balance",
    stage: 1,
    icon: "⚖",
    description: "Density altitude, performance charts, weight and balance calculations and CG limits.",
    driveId: "1-nx6FEtrugbKaJ26N48-HCWnn629zr03",
    flashcards: [
      { front: "Density altitude formula:", back: "Density Altitude = Pressure Altitude + [120 × (OAT − ISA temperature at that altitude)]. ISA sea level = 15°C; lapse rate = 2°C/1,000 ft." },
      { front: "ISA (International Standard Atmosphere) at sea level:", back: "Temperature: 15°C (59°F). Pressure: 29.92\" Hg (1013.25 mb). Lapse rate: 2°C per 1,000 ft." },
      { front: "What is pressure altitude?", back: "The altitude indicated when the altimeter is set to 29.92\" Hg. Used in all performance charts and for calculating density altitude." },
      { front: "Four factors that INCREASE density altitude (decrease air density):", back: "1) Higher temperature. 2) Higher elevation/altitude. 3) Lower barometric pressure. 4) Higher humidity." },
      { front: "How does high density altitude affect performance?", back: "Decreases engine power output, decreases propeller efficiency, requires higher groundspeed to reach liftoff → LONGER takeoff roll, REDUCED climb rate, and LONGER landing distance." },
      { front: "What is true altitude?", back: "The actual height of the aircraft above MSL. Indicated altitude corrected for non-standard temperature. GPS altitude approximates true altitude." },
      { front: "What is the danger of a forward center of gravity?", back: "Nose-heavy. Requires more back pressure/up elevator. Can make landing flare difficult. Reduces maximum gross weight capability. Most critical at low speeds." },
      { front: "What is the danger of an aft center of gravity?", back: "Reduces longitudinal stability. May lack sufficient elevator authority to recover from a stall. The MORE DANGEROUS condition of the two." },
      { front: "What is maximum gross weight?", back: "The maximum weight for which the aircraft is certificated for flight. Exceeding it: reduces performance, increases stall speed, stresses the airframe, and reduces structural margins." },
      { front: "How does humidity affect performance?", back: "Higher humidity = lower air density = higher density altitude. Water vapor displaces oxygen molecules in the air, reducing the air's ability to support combustion." },
      { front: "What does the POH performance chart account for?", back: "Takeoff and landing distances, climb rate, cruise speed and fuel burn — for given weight, altitude (pressure altitude), and temperature. Standard conditions assume hard, level, dry runway." },
    ],
    quiz: [
      {
        q: "Density altitude is defined as:",
        opts: ["Actual altitude above sea level", "Pressure altitude corrected for nonstandard temperature", "Indicated altitude when altimeter reads 29.92", "True altitude adjusted for terrain"],
        ans: 1,
        exp: "Density altitude is pressure altitude corrected for nonstandard temperature. It represents the altitude at which the airplane 'feels' like it is flying based on air density."
      },
      {
        q: "The ISA standard temperature at sea level is:",
        opts: ["0°C (32°F)", "15°C (59°F)", "20°C (68°F)", "25°C (77°F)"],
        ans: 1,
        exp: "ISA sea level: 15°C (59°F) and 29.92\" Hg. Temperature decreases 2°C per 1,000 ft in the standard atmosphere."
      },
      {
        q: "On a hot, humid day at a high-elevation airport, a pilot should expect:",
        opts: ["Normal performance as published", "Shorter takeoff roll and improved climb", "Longer takeoff roll and reduced climb performance", "No performance change until above 5,000 ft DA"],
        ans: 2,
        exp: "High temperature + high elevation + high humidity all increase density altitude. At high DA, engine power decreases, propeller efficiency drops, and more groundspeed is needed for liftoff — all increasing takeoff distance and reducing climb rate."
      },
      {
        q: "Which combination produces the HIGHEST density altitude?",
        opts: ["High elevation, low temperature, low humidity, high pressure", "High elevation, high temperature, high humidity, low pressure", "Low elevation, high temperature, high humidity, high pressure", "Low elevation, low temperature, high humidity, low pressure"],
        ans: 1,
        exp: "All four factors that reduce air density (high elevation, high temperature, high humidity, low pressure) combine to produce the highest density altitude — the worst-case performance scenario."
      },
      {
        q: "Pressure altitude is obtained by:",
        opts: ["Setting the altimeter to local QNH", "Setting the altimeter to 29.92\" Hg", "Correcting indicated altitude for temperature", "Reading GPS altitude directly"],
        ans: 1,
        exp: "Pressure altitude is read directly from the altimeter when the Kollsman window is set to 29.92\" Hg (standard pressure). It is used for all POH performance calculations."
      },
      {
        q: "An aft center of gravity is the MORE dangerous condition because:",
        opts: ["It makes the aircraft nose-heavy and difficult to rotate", "It reduces pitch stability and may prevent stall recovery", "It reduces maximum gross weight", "It causes asymmetric aileron drag"],
        ans: 1,
        exp: "An aft CG reduces longitudinal stability. In extreme cases, the elevator may not have sufficient authority to break the stall or prevent a spin. Forward CG creates controllability issues, but aft CG creates stability issues — more dangerous."
      },
      {
        q: "Engine power in a normally-aspirated (non-turbocharged) engine decreases as air density:",
        opts: ["Increases", "Decreases", "Remains the same", "Only when OAT exceeds 35°C"],
        ans: 1,
        exp: "A normally-aspirated engine produces power proportional to the mass of air inducted. As air density decreases (higher DA), less air mass enters the cylinders, and power output decreases proportionally."
      },
      {
        q: "True altitude is:",
        opts: ["Altitude shown with 29.92 set in the altimeter", "Actual height of the aircraft above MSL", "Height above ground level (AGL)", "Altitude corrected for magnetic variation"],
        ans: 1,
        exp: "True altitude is the actual height above mean sea level (MSL). It equals indicated altitude corrected for non-standard temperature and pressure. GPS altitude approximates true altitude."
      },
      {
        q: "Humidity affects airplane performance because:",
        opts: ["Humid air is denser than dry air, improving performance", "Water vapor displaces oxygen, reducing air density and engine power", "Humidity increases propeller efficiency", "Humidity only affects jet engines, not piston engines"],
        ans: 1,
        exp: "Water vapor is less dense than the nitrogen and oxygen it displaces. Higher humidity means less oxygen available per unit volume of air → reduced combustion efficiency → lower engine power output."
      },
      {
        q: "A forward center of gravity is primarily characterized by:",
        opts: ["Reduced pitch stability, potential stall recovery issues", "Nose-heaviness requiring more back pressure and potentially preventing proper rotation", "Improved stall recovery", "No effect on handling qualities"],
        ans: 1,
        exp: "A forward CG creates nose-heaviness. The pilot needs more up elevator to maintain level flight and to rotate for takeoff. Extreme forward CG can prevent the nose from being raised in the flare, making landing difficult."
      },
    ]
  },
  {
    id: 6,
    title: "Aeromedical Factors and ADM",
    stage: 2,
    icon: "+",
    description: "Hypoxia types, hyperventilation, spatial disorientation, and aeronautical decision making.",
    driveId: "1lOFLS2kAPEEAiAVpUnY9UXJWFfL_8hn2",
    flashcards: [
      { front: "Four types of hypoxia:", back: "1) Hypoxic: insufficient O₂ (altitude). 2) Anemic/Hypemic: blood can't carry O₂ (CO poisoning, blood donation). 3) Stagnant: O₂-rich blood not moving (shock, extreme Gs, cold). 4) Histotoxic: cells can't use O₂ (alcohol, drugs)." },
      { front: "Symptoms of hypoxia:", back: "Initial euphoria → headache → delayed reaction time → visual impairment → cyanosis (blue fingernails/lips) → tunnel vision → unconsciousness. Night vision impaired from as low as 5,000 ft MSL." },
      { front: "Time of useful consciousness (TUC) at altitude:", back: "18,000 ft: 20-30 min | 22,000 ft: 10 min | 25,000 ft: 3-5 min | 28,000 ft: 2.5-3 min | 40,000 ft: 15-20 sec | 43,000 ft+: 9-12 sec" },
      { front: "Treatment for hypoxia:", back: "Descend to lower altitude AND/OR use supplemental oxygen. Recommended: O₂ above 10,000 ft day, above 5,000 ft at night." },
      { front: "What is hyperventilation?", back: "Abnormally deep/rapid breathing flushing CO₂ from the blood. Caused by stress, anxiety, or fear. Symptoms: dizziness, tingling extremities, confusion, visual disturbance. Can be mistaken for hypoxia." },
      { front: "Treatment for hyperventilation:", back: "SLOW your breathing rate. Options: breathe into a paper bag (reinhaes CO₂), talk/sing aloud (forces normal rhythm), or conscious breath control." },
      { front: "What is spatial disorientation?", back: "Inability to correctly perceive aircraft attitude relative to Earth. The vestibular system (inner ear) provides false cues that override visual judgment — especially dangerous in IMC." },
      { front: "What is 'the leans'?", back: "The vestibular system still senses a bank after returning to wings-level. The pilot feels compelled to lean to 'correct' a non-existent bank. Trust the instruments." },
      { front: "IMSAFE checklist:", back: "Illness, Medication, Stress, Alcohol, Fatigue, Emotion/Eating — personal go/no-go assessment before flight." },
      { front: "PAVE risk identification:", back: "Pilot (fitness, currency), Aircraft (airworthiness, equipment), enVironment (weather, terrain, airspace, NOTAMs), External pressures (schedule, passengers, 'get-home-itis')." },
      { front: "DECIDE model for ADM:", back: "Detect a change, Estimate the need to react, Choose a desired outcome, Identify actions to control the change, Do the action, Evaluate the effect. A continuous loop." },
      { front: "How does alcohol affect hypoxia susceptibility?", back: "Alcohol lowers the threshold for hypoxia effects. Even small amounts significantly impair performance at altitude. Also reduces CO₂ sensitivity, masking early hypoxia warning signs." },
    ],
    quiz: [
      {
        q: "Carbon monoxide poisoning causes which type of hypoxia?",
        opts: ["Hypoxic hypoxia", "Anemic (hypemic) hypoxia", "Stagnant hypoxia", "Histotoxic hypoxia"],
        ans: 1,
        exp: "Anemic (hypemic) hypoxia occurs when blood cannot carry sufficient oxygen — not because O₂ is unavailable, but because hemoglobin is occupied (CO binds to hemoglobin 200x more readily than O₂). Blood donation also causes this type."
      },
      {
        q: "A pilot shows dizziness, tingling fingertips, and confusion during flight. Most likely cause:",
        opts: ["Hypoxia", "Hyperventilation", "Carbon monoxide poisoning", "Spatial disorientation"],
        ans: 1,
        exp: "Tingling extremities and dizziness are classic hyperventilation symptoms from CO₂ washout. Hypoxia is harder to detect (euphoria, lack of self-awareness). Treat hyperventilation by slowing breathing rate."
      },
      {
        q: "Time of useful consciousness at 25,000 ft MSL is approximately:",
        opts: ["20-30 minutes", "10 minutes", "3-5 minutes", "15-20 seconds"],
        ans: 2,
        exp: "At 25,000 ft: TUC = 3-5 minutes. At 18,000 ft: 20-30 min. At 22,000 ft: ~10 min. At 40,000 ft: only 15-20 seconds. The rapid reduction with altitude is why supplemental O₂ is critical."
      },
      {
        q: "Night vision begins to deteriorate from hypoxia at cabin altitudes as low as:",
        opts: ["12,000 ft", "10,000 ft", "8,000 ft", "5,000 ft"],
        ans: 3,
        exp: "Night vision (rod photoreceptors) requires more oxygen than day vision (cones). Deterioration begins as low as 5,000 ft MSL — well below the 12,000 ft where other hypoxia effects become significant."
      },
      {
        q: "Histotoxic hypoxia is caused by:",
        opts: ["Altitude reducing available oxygen", "CO binding to hemoglobin", "Reduced blood circulation", "Alcohol or drugs preventing cells from using oxygen"],
        ans: 3,
        exp: "Histotoxic hypoxia: cells cannot effectively use oxygen even when available in sufficient quantity. Alcohol and certain drugs disrupt cellular metabolism. This is why even moderate drinking impairs high-altitude performance."
      },
      {
        q: "Treatment for hyperventilation includes:",
        opts: ["Using supplemental oxygen and descending", "Slowing breathing rate, breathing into a bag, or talking aloud", "Increasing cockpit ventilation", "Taking an antihistamine"],
        ans: 1,
        exp: "Hyperventilation is treated by raising CO₂ levels: slow breathing rate, breathe into a bag (re-inhales CO₂), or talk/sing aloud (forces normal breathing rhythm). Supplemental O₂ will NOT help — the problem is too LITTLE CO₂, not too little O₂."
      },
      {
        q: "'The leans' is best described as:",
        opts: ["A drug interaction with anti-nausea medication", "A vestibular sensation of bank when the aircraft is actually wings-level", "Leaning against the controls during fatigue", "An asymmetric thrust condition"],
        ans: 1,
        exp: "'The leans' occurs when the vestibular system detects a bank that no longer exists after correcting to wings-level. The pilot feels compelled to lean. Correct response: trust the flight instruments and maintain instrument scan."
      },
      {
        q: "The PAVE checklist evaluates risk across which four categories?",
        opts: ["Performance, Airspace, Visibility, Equipment", "Pilot, Aircraft, enVironment, External pressures", "Planning, Avoidance, Verification, Execution", "Preflight, Altitude, Visibility, Emergency procedures"],
        ans: 1,
        exp: "PAVE: Pilot (personal fitness, currency), Aircraft (airworthiness, equipment), enVironment (weather, terrain, airspace, NOTAMs), External pressures (schedule, passengers, get-home-itis). Used to identify hazards before flight."
      },
      {
        q: "Stagnant hypoxia results from:",
        opts: ["Low oxygen partial pressure at altitude", "Blood unable to carry oxygen due to CO", "Oxygen-rich blood not circulating properly", "Cells unable to metabolize oxygen"],
        ans: 2,
        exp: "Stagnant hypoxia: the blood is oxygen-rich but not moving adequately. Causes include shock, reduced circulation from extreme G-forces, extreme cold restricting blood flow, or cardiac issues."
      },
      {
        q: "The DECIDE model stands for:",
        opts: ["Define, Evaluate, Correct, Implement, Decide, Ensure", "Detect, Estimate, Choose, Identify, Do, Evaluate", "Detect, Examine, Calculate, Implement, Determine, Execute", "Determine, Estimate, Choose, Inspect, Do, Evaluate"],
        ans: 1,
        exp: "DECIDE: Detect a change, Estimate need to react, Choose a desired outcome, Identify actions to control, Do the action, Evaluate the effect. It's a continuous loop for systematic ADM during flight."
      },
    ]
  },
  {
    id: 7,
    title: "Aviation Weather",
    stage: 2,
    icon: "~",
    description: "Atmosphere structure, Coriolis force, air masses, fronts, thunderstorms, and icing.",
    driveId: "1GKnkrfVlLmQwbK-o_aLoRgTjTFweltrs",
    flashcards: [
      { front: "What causes the Coriolis force?", back: "The Earth's rotation. In the Northern Hemisphere, it deflects moving air to the RIGHT. Creates clockwise circulation around high-pressure, counterclockwise around low-pressure systems." },
      { front: "Layers of the atmosphere (low to high):", back: "Troposphere → Tropopause → Stratosphere → Mesosphere → Thermosphere. Most weather occurs in the troposphere." },
      { front: "How high is the troposphere?", back: "~20,000 ft (4 mi) over the poles to ~65,000 ft (12 mi) over the equator. Higher in summer, lower in winter. Higher at lower latitudes." },
      { front: "What is the tropopause?", back: "Transition zone between troposphere and stratosphere. Characterized by nearly constant temperatures and decreasing winds. Traps most of the atmosphere's water vapor below it." },
      { front: "Dry air composition:", back: "~78% nitrogen, ~21% oxygen, ~1% other gases (argon, CO₂, neon, helium, etc.). Air always contains some water vapor (up to ~5% by volume)." },
      { front: "Standard temperature lapse rate:", back: "2°C (3.5°F) per 1,000 ft altitude gain in the troposphere. When the actual lapse rate EXCEEDS this, the atmosphere is unstable — favors convection and thunderstorm development." },
      { front: "What is a cold front?", back: "Cold, dense air advances under warm air, displacing it rapidly. Associated with: fast-moving severe weather, cumulonimbus clouds, gusty winds, heavy precipitation, then RAPID clearing." },
      { front: "What is a warm front?", back: "Warm air advances over cold air — gradual slope, gentle lifting. Associated with: widespread stratus, steady precipitation, low ceilings, poor visibility over a LARGE area." },
      { front: "Three requirements for thunderstorm formation:", back: "1) Sufficient moisture. 2) A lifting mechanism (frontal, orographic, convective). 3) An unstable atmosphere. All three must be present simultaneously." },
      { front: "What is relative humidity?", back: "The ratio of actual water vapor in the air to the maximum it could hold at that temperature. At 100%, air is saturated and condensation begins (fog, clouds, precipitation)." },
      { front: "What is the dew point?", back: "The temperature at which air becomes saturated and condensation begins. When temperature-dew point spread is < ~4°F (2°C), fog or low clouds are likely." },
      { front: "What is orographic lifting?", back: "Air forced upward over terrain (mountains). Forms clouds and precipitation on the windward side; descending air on the leeward side creates a 'rain shadow' and dry, warming conditions." },
    ],
    quiz: [
      {
        q: "The Coriolis force is caused by:",
        opts: ["Pressure differences between highs and lows", "The Earth's rotation deflecting moving air", "Temperature differences between air masses", "Surface friction from terrain"],
        ans: 1,
        exp: "The Coriolis force results from Earth's rotation. In the Northern Hemisphere, it deflects wind to the RIGHT — creating clockwise (anticyclonic) flow around highs and counterclockwise (cyclonic) flow around lows."
      },
      {
        q: "The troposphere extends from the surface to approximately:",
        opts: ["5,000 ft at all latitudes", "20,000 ft (poles) to 65,000 ft (equator)", "18,000 ft everywhere", "Above 80,000 ft"],
        ans: 1,
        exp: "The troposphere height varies: ~20,000 ft over the poles to ~65,000 ft over the equator. It is higher in summer than winter. It contains virtually all weather and most atmospheric water vapor."
      },
      {
        q: "Three conditions required for thunderstorm formation:",
        opts: ["Low pressure, wind shear, moisture", "Moisture, a lifting mechanism, atmospheric instability", "Cold front, moisture, surface winds > 25 kts", "High temperatures, fog, orographic lifting"],
        ans: 1,
        exp: "Thunderstorms require all three: sufficient water vapor (moisture), a lifting mechanism (frontal, orographic, or convective/heating), and an unstable atmosphere that supports rapid vertical development."
      },
      {
        q: "Weather typically associated with a cold front includes:",
        opts: ["Widespread stratus clouds and steady precipitation over a large area", "Fast-moving severe weather, cumulonimbus, then rapid clearing", "Gradually deteriorating visibility over many hours", "Icing in clouds at all altitudes"],
        ans: 1,
        exp: "Cold fronts: fast-moving, steep slope. Produce cumulonimbus clouds, thunderstorms, heavy precipitation, gusty winds — but the weather passes QUICKLY and skies clear rapidly after frontal passage."
      },
      {
        q: "A warm front typically produces:",
        opts: ["Brief, heavy convective weather then rapid clearing", "Widespread stratus, steady rain, low ceilings, poor visibility over a large area for an extended period", "Clear skies followed immediately by extreme turbulence", "Isolated cells along a squall line"],
        ans: 1,
        exp: "Warm fronts have a gentle slope and lift air gradually over a wide area. They produce extensive stratus cloud decks, steady precipitation, IFR conditions over hundreds of miles. Weather deteriorates gradually and improves slowly."
      },
      {
        q: "The standard temperature lapse rate in the troposphere is:",
        opts: ["1°C per 1,000 ft", "2°C per 1,000 ft", "3°C per 1,000 ft", "5°C per 1,000 ft"],
        ans: 1,
        exp: "ISA lapse rate = 2°C (3.5°F) per 1,000 ft. When the actual lapse rate is greater than 2°C/1,000 ft, the atmosphere is unstable and susceptible to convective development and thunderstorm formation."
      },
      {
        q: "Dry air consists of approximately:",
        opts: ["50% oxygen, 48% nitrogen", "78% nitrogen, 21% oxygen, 1% other", "95% oxygen, 4% nitrogen", "60% nitrogen, 39% oxygen"],
        ans: 1,
        exp: "Dry air: ~78% nitrogen, ~21% oxygen, ~1% trace gases. Actual air always contains water vapor (displaces other gases) in varying amounts up to ~5% by volume — more in warm, humid conditions."
      },
      {
        q: "Orographic lifting occurs when:",
        opts: ["Air rises due to surface heating in the afternoon", "Air is forced upward over terrain (mountains)", "Air rises along a frontal boundary", "Upper-level divergence causes surface convergence"],
        ans: 1,
        exp: "Orographic lifting: prevailing winds force air upward over elevated terrain. Windward sides get clouds and precipitation; leeward sides experience descending, warming air and a 'rain shadow' effect."
      },
      {
        q: "When temperature-dew point spread is less than approximately 4°F, a pilot should expect:",
        opts: ["Excellent visibility and no clouds", "Possible fog or low cloud formation", "High-altitude thunderstorms only", "Increased turbulence near the surface"],
        ans: 1,
        exp: "A small temperature-dew point spread means the air is nearly saturated. As temperature drops toward dew point, condensation occurs. A spread < ~4°F/2°C is a reliable indicator of fog, low clouds, or precipitation."
      },
      {
        q: "The tropopause is best described as:",
        opts: ["The warmest layer above 30,000 ft", "The boundary between the troposphere and stratosphere, with nearly constant temperatures", "The layer where most commercial cruising occurs", "The region of maximum atmospheric turbulence"],
        ans: 1,
        exp: "The tropopause is the boundary between the troposphere and stratosphere. It traps water vapor below it and is characterized by constant temperature with altitude. Severe thunderstorm tops can penetrate into the stratosphere."
      },
    ]
  },
  {
    id: 8,
    title: "Aviation Weather Services",
    stage: 2,
    icon: "◉",
    description: "METARs, TAFs, PIREPs, SIGMETs, AIRMETs, and aviation weather products.",
    driveId: "1bA94GDRRfL1uamc8ERrB6XT9E4YzKXz6",
    flashcards: [
      { front: "What is a METAR?", back: "Aviation Routine Weather Report — hourly surface observation. Reports: wind direction/speed/gusts, visibility, present weather, sky condition, temperature/dew point, altimeter setting. Valid approximately 1 hour." },
      { front: "What is a TAF?", back: "Terminal Aerodrome Forecast — weather forecast for an airport, issued 4x daily (0000/0600/1200/1800Z), valid 24 or 30 hours, covering ~5 SM from the airport." },
      { front: "SIGMET (WS) vs Convective SIGMET (WST):", back: "SIGMET: non-convective severe weather for ALL aircraft (severe icing, severe turbulence, volcanic ash, dust storms). Valid 4 hrs (6 for ash). Convective SIGMET: thunderstorm hazards. Valid 2 hrs." },
      { front: "Three types of AIRMETs:", back: "Sierra (IFR conditions and/or mountain obscurement). Tango (moderate turbulence, surface winds ≥30 kts, low-level wind shear). Zulu (moderate icing and freezing level data)." },
      { front: "What is a PIREP?", back: "Pilot Report (UA). First-hand in-flight weather observations filed by pilots via radio or ACARS. Reports: turbulence, icing, visibility, cloud tops, wind shear. Most current source of actual conditions." },
      { front: "What does TEMPO in a TAF mean?", back: "Temporary conditions expected for less than 1 hour at a time, occurring during less than half of the TEMPO period." },
      { front: "What is a SPECI (Special METAR)?", back: "An unscheduled METAR issued when conditions change significantly: ceiling drops, visibility decreases, wind shift, new precipitation, or other significant changes between regular hourly reports." },
      { front: "Cloud height reporting in METARs:", back: "Always in feet AGL, in hundreds of feet. BKN025 = broken ceiling at 2,500 ft AGL. OVC008 = overcast at 800 ft AGL (IFR conditions)." },
      { front: "What is SKC vs CLR in a METAR?", back: "SKC (Sky Clear): used by human weather observers — no clouds. CLR: used by automated stations — no clouds below 12,000 ft. Both indicate clear conditions." },
      { front: "What is a winds aloft forecast (FB)?", back: "Forecast winds and temperatures aloft at specified altitudes from 3,000 to 53,000 ft. Wind direction is in TRUE (not magnetic) degrees. No wind listed for the level when wind speed < 5 kts." },
      { front: "What does PROB30 or PROB40 mean in a TAF?", back: "Probability of the following conditions occurring: PROB30 = 30% chance, PROB40 = 40% chance. Used for conditions too uncertain for TEMPO or BECMG." },
    ],
    quiz: [
      {
        q: "A SIGMET (WS) is issued for:",
        opts: ["IFR conditions and mountain obscurement", "Convective weather hazards including thunderstorms", "Non-convective weather hazardous to ALL aircraft: severe icing, severe turbulence, volcanic ash", "Light icing and moderate turbulence for small aircraft"],
        ans: 2,
        exp: "SIGMETs (WS) cover non-convective hazards to ALL aircraft: severe or extreme turbulence (not in thunderstorms), severe icing, volcanic ash, widespread dust/sandstorms. Valid 4 hrs (6 for volcanic ash/tropical cyclones)."
      },
      {
        q: "A Convective SIGMET (WST) is valid for a maximum of:",
        opts: ["6 hours", "4 hours", "2 hours", "1 hour"],
        ans: 2,
        exp: "Convective SIGMETs are valid 2 hours maximum. They cover severe thunderstorms (hail ≥3/4\", winds ≥50 kts, tornadoes), embedded thunderstorms, lines of thunderstorms, or areas of ≥40% thunderstorm coverage."
      },
      {
        q: "AIRMET Tango covers:",
        opts: ["IFR conditions and mountain obscurement", "Moderate turbulence, surface winds ≥30 kts, low-level wind shear", "Moderate icing and freezing level data", "All thunderstorm activity below FL180"],
        ans: 1,
        exp: "AIRMET Tango (T for Turbulence): moderate turbulence, sustained surface winds ≥30 kts, and low-level wind shear. AIRMET Sierra covers IFR/mountain obscurement. AIRMET Zulu covers icing."
      },
      {
        q: "In a METAR, cloud heights are always reported in:",
        opts: ["Feet MSL", "Feet AGL, in hundreds of feet", "Meters AGL", "Feet MSL, in thousands of feet"],
        ans: 1,
        exp: "METAR cloud heights are ALWAYS in feet AGL (above ground level), in hundreds of feet. This is important — the field elevation is NOT added. OVC012 = overcast at 1,200 ft above the airport."
      },
      {
        q: "TAFs are issued how many times per day?",
        opts: ["Every hour", "Twice daily", "Four times daily (0000, 0600, 1200, 1800Z)", "Once per day at 1200Z"],
        ans: 2,
        exp: "TAFs are issued four times daily at 0000Z, 0600Z, 1200Z, and 1800Z. They cover 24 hours (or 30 hours for certain airports) and describe expected conditions within ~5 SM of the airport."
      },
      {
        q: "A PIREP is most valuable because it provides:",
        opts: ["Long-range weather forecasts for a route", "Actual real-time conditions encountered in flight by pilots", "Standard altimeter settings for a region", "Amendments to TAFs"],
        ans: 1,
        exp: "PIREPs are pilot-filed reports of actual in-flight conditions: turbulence intensity/altitude, icing type/severity, cloud tops, visibility, wind shear. They are the most current source of actual conditions along a route."
      },
      {
        q: "In a METAR, 'OVC008' means:",
        opts: ["Overcast at 8,000 ft MSL", "Overcast at 800 ft AGL", "Overcast at 8,000 ft AGL", "8 oktas of cloud coverage"],
        ans: 1,
        exp: "Cloud heights in METARs are in hundreds of feet AGL. OVC008 = Overcast at 800 ft AGL. Combined with IFR visibility (< 3 SM), this would constitute IFR conditions requiring instrument procedures."
      },
      {
        q: "TEMPO in a TAF indicates:",
        opts: ["Conditions lasting more than 6 hours", "Conditions occurring temporarily: each occurrence < 1 hour, total < half the TEMPO period", "Temperature forecast changes", "Conditions beginning at a specific time"],
        ans: 1,
        exp: "TEMPO = temporary fluctuating conditions. Each occurrence lasts less than 1 hour and collectively occupies less than half the designated period. BECMG means conditions changing more permanently."
      },
      {
        q: "Winds aloft forecasts (FB winds) are given in:",
        opts: ["Magnetic degrees", "True degrees", "Relative to local terrain", "Both true and magnetic"],
        ans: 1,
        exp: "FB winds aloft forecasts use TRUE degrees — not magnetic. This is the opposite of METARs (which use magnetic). Pilots must apply the local magnetic variation to convert for actual aircraft navigation."
      },
      {
        q: "A Special METAR (SPECI) is issued when:",
        opts: ["A VIP or airliner requests special weather service", "Significant weather changes occur between regular hourly reports", "Only when ceiling drops below 200 ft AGL", "When a SIGMET is issued for the area"],
        ans: 1,
        exp: "SPECIs are unscheduled METARs triggered by significant changes: ceiling dropping, visibility decreasing, new precipitation, wind shifts, or other notable changes that pilots need to know between regular hourly observations."
      },
    ]
  },
  {
    id: 9,
    title: "Cross-Country Flight Planning",
    stage: 2,
    icon: "→",
    description: "Sectional charts, true/magnetic course, wind correction angle, fuel planning, and navigation logs.",
    driveId: null,
    flashcards: [
      { front: "Course conversion: TC → MC → MH", back: "True Course ± Variation = Magnetic Course. Magnetic Course ± Deviation = Magnetic Heading. 'True Virgins Make Dull Companions' (TV=MC, MD=CH... or TC→V→MC→D→MH)." },
      { front: "East is Least, West is Best:", back: "Eastern magnetic variation: SUBTRACT from TC to get MC (east variation is 'least'). Western magnetic variation: ADD to TC to get MC (west variation is 'best')." },
      { front: "What is a sectional chart?", back: "VFR aeronautical chart, scale 1:500,000 (~7 NM per inch). Shows terrain, airports, airspace boundaries, obstructions, VORs, and other VFR navigation information. Updated every 6 months." },
      { front: "What is wind correction angle (WCA)?", back: "The number of degrees the aircraft must be pointed INTO the wind to track the desired course over the ground. Applied to magnetic course to determine the magnetic heading to fly." },
      { front: "VFR day fuel requirement:", back: "Enough fuel to fly to destination PLUS 30 minutes at normal cruise power. Night VFR: 45 minutes reserve." },
      { front: "True airspeed (TAS) vs indicated airspeed (IAS):", back: "TAS > IAS at altitude (by ~2% per 1,000 ft). ASI is calibrated for sea-level density. At altitude, same IAS represents faster actual movement through less-dense air." },
      { front: "Groundspeed calculation:", back: "GS = TAS ± wind component (tailwind adds, headwind subtracts). Used to calculate time en route: Time = Distance ÷ Groundspeed." },
      { front: "What is MVFR?", back: "Marginal VFR: ceiling 1,000-3,000 ft AGL and/or visibility 3-5 SM. Technically VFR but close to IFR limits. VFR pilots should be cautious in MVFR conditions." },
      { front: "What is a VOR radial?", back: "A magnetic bearing measured FROM the VOR station (360 possible radials, one per degree). The TO bearing is the reciprocal: radial 090 means you are east of the station; track 270° inbound." },
      { front: "Flight planning fuel calculation:", back: "Fuel required = fuel flow (gal/hr) × estimated time en route + reserve. Always add alternate fuel if alternate airport required." },
      { front: "What is dead reckoning?", back: "Navigation by calculation: known starting position + heading + airspeed + time = estimated position. Accurate TAS, true course, wind correction, and elapsed time are critical." },
    ],
    quiz: [
      {
        q: "To convert True Course to Magnetic Course, you apply:",
        opts: ["Compass deviation", "Magnetic variation (declination)", "Wind correction angle", "Both variation and deviation"],
        ans: 1,
        exp: "TC ± variation = Magnetic Course. Then MC ± deviation = Magnetic Heading. Variation accounts for the difference between true north and magnetic north. Deviation accounts for aircraft compass error."
      },
      {
        q: "'East is Least, West is Best' means:",
        opts: ["Eastbound flights use less fuel", "East variation is subtracted from TC; west variation is added to TC", "East variation is added to TC; west variation is subtracted", "Applies to deviation, not variation"],
        ans: 1,
        exp: "To get Magnetic Course from True Course: EAST variation = SUBTRACT (least); WEST variation = ADD (best). Example: TC 090, West variation 15° → MC = 090 + 15 = 105°."
      },
      {
        q: "A sectional aeronautical chart has a scale of:",
        opts: ["1:250,000 (about 4 NM/inch)", "1:500,000 (about 7 NM/inch)", "1:1,000,000 (about 14 NM/inch)", "1:100,000 (about 1.4 NM/inch)"],
        ans: 1,
        exp: "Sectional charts: 1:500,000 scale, ~7 NM per inch. WAC (World Aeronautical Charts) are 1:1,000,000 for long-range planning. TAC (Terminal Area Charts) are 1:250,000 around major airports."
      },
      {
        q: "VFR day fuel requirements under 14 CFR 91 require fuel to fly to destination plus at least:",
        opts: ["30 minutes at normal cruise speed", "45 minutes at normal cruise speed", "1 hour at normal cruise speed", "No reserve legally required for day VFR"],
        ans: 0,
        exp: "14 CFR 91.151: Day VFR = destination fuel + 30 min reserve at normal cruise. Night VFR = destination fuel + 45 min reserve. These are MINIMUMS; good practice and IFR requirements are more conservative."
      },
      {
        q: "True Airspeed (TAS) at altitude compared to Indicated Airspeed (IAS):",
        opts: ["TAS is less than IAS at altitude", "TAS is greater than IAS at altitude (by ~2% per 1,000 ft)", "TAS equals IAS at all altitudes", "TAS is only greater than IAS above FL180"],
        ans: 1,
        exp: "The ASI is calibrated for standard sea-level air density. At altitude, air is less dense, so the same indicated speed represents faster actual movement through the air. TAS ≈ IAS × (1 + 0.02 × altitude in thousands of ft)."
      },
      {
        q: "MVFR (Marginal VFR) is defined as ceiling between:",
        opts: ["500-1,000 ft AGL and/or visibility 1-3 SM", "1,000-3,000 ft AGL and/or visibility 3-5 SM", "3,000-5,000 ft AGL and/or visibility 5-7 SM", "Below 500 ft AGL and/or visibility < 1 SM"],
        ans: 1,
        exp: "MVFR: ceiling 1,000-3,000 ft AGL and/or visibility 3-5 SM. IFR: ceiling < 1,000 ft and/or visibility < 3 SM. LIFR: ceiling < 500 ft and/or visibility < 1 SM. VFR: ceiling > 3,000 ft and visibility > 5 SM."
      },
      {
        q: "Wind correction angle (WCA) is applied to correct for:",
        opts: ["Magnetic variation between true and magnetic north", "Wind drift to ensure the aircraft tracks the desired course over the ground", "Compass deviation specific to each aircraft", "Density altitude effects on true airspeed"],
        ans: 1,
        exp: "WCA corrects for the effect of crosswind on the aircraft's track over the ground. By angling into the wind, the aircraft's resultant path follows the desired course. MC ± WCA = Magnetic Heading."
      },
      {
        q: "If fuel flow is 9 gal/hr, flight time is 3 hours, and 45 min reserve is required, minimum fuel aboard must be:",
        opts: ["27 gallons", "33.75 gallons", "36 gallons", "31.5 gallons"],
        ans: 1,
        exp: "Trip fuel: 9 gal/hr × 3 hr = 27 gal. Reserve: 9 gal/hr × 0.75 hr (45 min) = 6.75 gal. Total: 27 + 6.75 = 33.75 gallons minimum."
      },
      {
        q: "A VOR radial is a bearing measured:",
        opts: ["TO the VOR station from the aircraft", "FROM the VOR station (in magnetic degrees)", "Relative to the aircraft's heading", "In true degrees from the station"],
        ans: 1,
        exp: "VOR radials are always measured FROM the station in magnetic degrees. An aircraft on the 270 radial is due WEST of the station. To fly toward the station, track inbound on the reciprocal (090°)."
      },
      {
        q: "Groundspeed differs from true airspeed by:",
        opts: ["Magnetic variation", "The wind component along the route", "Compass deviation", "The density altitude correction"],
        ans: 1,
        exp: "GS = TAS ± wind component. A tailwind adds to TAS (GS > TAS). A headwind reduces it (GS < TAS). A direct crosswind doesn't change GS much but requires WCA correction to stay on course."
      },
    ]
  },
  {
    id: 10,
    title: "Navigation Systems",
    stage: 2,
    icon: "◎",
    description: "VOR, GPS/WAAS, ADF/NDB navigation, VOR receiver checks, and the VOR MON.",
    driveId: "1aqmKI1hyJUnMj4n5t5B7C8irAu8h17z5",
    flashcards: [
      { front: "What is a VOR?", back: "Very High Frequency Omnidirectional Range. Ground-based radio nav aid operating 108-118 MHz. Provides 360 radials from the station for position and course guidance." },
      { front: "What is the OBS?", back: "Omnibearing Selector — the rotary knob on the VOR indicator used to select the desired radial or course. Rotate until the CDI needle centers, then read the selected course." },
      { front: "VOR test facility (VOT) check procedure:", back: "Tune VOT frequency → Center the CDI needle → Selected course should read 360° with a FROM indication, OR 180° with a TO indication — regardless of aircraft position on the airport." },
      { front: "VOR check accuracy tolerances:", back: "Ground (VOT): ±4°. Airborne check: ±6°. Dual VOR (two receivers on same station): ±4° between the two. Required within 30 days for IFR flight (14 CFR 91.171)." },
      { front: "CDI needle deflection interpretation:", back: "With TO selected: fly TOWARD the needle to get back on course. With FROM selected: fly AWAY from the needle. One dot ≈ 2° off course; full scale ≈ 10° off." },
      { front: "What is the VOR MON?", back: "VOR Minimal Operation Network — a reduced network of strategically positioned VORs retained as a GPS backup. Guarantees pilots are within 100 NM of an airport with an ILS, LOC, or VOR approach." },
      { front: "What is WAAS?", back: "Wide Area Augmentation System — enhances GPS accuracy using ground-based correction stations. WAAS GPS can fly LPV approaches with DAs as low as 200 ft AGL." },
      { front: "VOR receiver accuracy:", back: "Generally within ±1°. The navigation accuracy is excellent, but the VOR receiver in the aircraft deteriorates over time — requiring periodic checks per 14 CFR 91.171 for IFR use." },
      { front: "What is ADF/NDB?", back: "Automatic Direction Finder / Non-Directional Beacon. The ADF needle always points TOWARD the NDB station regardless of aircraft heading. To track to the station, turn until needle points to 0° (nose)." },
      { front: "What is GPS RNAV?", back: "Area Navigation using GPS. Allows direct point-to-point navigation without flying over ground-based navaids. Required by WAAS for LPV/LNAV+V approaches. Primary nav in modern GA aircraft." },
      { front: "What does a 'FROM' indication on a VOR indicate?", back: "The aircraft is positioned on the selected radial, on the far side of the station. The VOR is BEHIND the aircraft if tracking outbound. TO means the station is ahead." },
    ],
    quiz: [
      {
        q: "When performing a VOT check on the ground, the maximum allowable error is:",
        opts: ["±2°", "±4°", "±6°", "±10°"],
        ans: 1,
        exp: "Ground VOT check: maximum allowable error is ±4°. Airborne VOR check: ±6°. Dual VOR check (two receivers comparing same station): ±4° between them. These checks must be logged for IFR use."
      },
      {
        q: "Using a VOR test facility (VOT), the CDI should center with the OBS indicating:",
        opts: ["Any radial with a FROM indication", "360° FROM or 180° TO, regardless of position on the airport", "The magnetic bearing to the VOT station", "090° or 270° with a TO indication"],
        ans: 1,
        exp: "A VOT radiates the 360° radial in all directions. The CDI should center with 360° selected and a FROM indication (or 180° with TO). This is the same regardless of where on the airport the aircraft is."
      },
      {
        q: "VOR receiver accuracy checks are required every __ days for IFR flight:",
        opts: ["60 days", "30 days", "90 days", "Annually (annual inspection)"],
        ans: 1,
        exp: "14 CFR 91.171 requires VOR receiver accuracy checks within the preceding 30 days for IFR operations. The check must be logged: date, location/facility, bearing error (within tolerances), and pilot signature."
      },
      {
        q: "The VOR Minimal Operation Network (MON) ensures:",
        opts: ["Every airport has a VOR within 25 NM", "Pilots are always within 100 NM of an airport with at least an ILS, LOC, or VOR approach", "VOR will remain the primary nav system indefinitely", "GPS is available at all times as a primary nav source"],
        ans: 1,
        exp: "The VOR MON provides GPS-independent backup navigation. It retains strategic VORs so that if GPS fails, pilots can navigate to an airport within 100 NM that has a non-GPS instrument approach."
      },
      {
        q: "With a TO indication and the CDI needle deflected to the RIGHT, the pilot should:",
        opts: ["Turn left to return to course", "Turn right to return to course", "Fly parallel to the current track", "Reverse course and fly FROM instead"],
        ans: 1,
        exp: "With a TO indication, 'fly toward the needle.' A right deflection means the course is to the RIGHT of the aircraft's current position — turn right to intercept and center the needle."
      },
      {
        q: "VOR radials are always measured:",
        opts: ["TO the station from the aircraft, in magnetic degrees", "FROM the station, in magnetic degrees", "FROM the station, in true degrees", "Relative to the aircraft's current heading"],
        ans: 1,
        exp: "VOR radials are measured FROM the station in magnetic degrees (0-360). An aircraft on the 090 radial is east of the station. The inbound course to the station on this radial would be 270°."
      },
      {
        q: "WAAS (Wide Area Augmentation System) allows GPS to support:",
        opts: ["Only enroute navigation", "LPV approaches with decision altitudes as low as 200 ft AGL", "ILS-equivalent Cat II approaches to 100 ft", "All GPS approaches regardless of equipment certification"],
        ans: 1,
        exp: "WAAS corrects GPS errors using a network of ground reference stations, enabling LPV (Localizer Performance with Vertical guidance) approaches with DAs as low as 200 ft AGL — comparable to Cat I ILS minimums."
      },
      {
        q: "An ADF needle always points:",
        opts: ["Toward magnetic north", "Toward the NDB station, regardless of aircraft heading", "Relative to the aircraft nose (bearing TO station relative)", "In the direction of the aircraft's ground track"],
        ans: 1,
        exp: "The ADF needle always points directly toward the NDB station, regardless of aircraft heading. To fly to the station, turn until the needle points to the top (0°/360°) of the bearing indicator."
      },
      {
        q: "VOR course alignment accuracy is generally within:",
        opts: ["±0.5°", "±1°", "±5°", "±10°"],
        ans: 1,
        exp: "VOR course alignment is generally accurate to within ±1°. However, VOR receivers in aircraft can deteriorate, which is why 14 CFR 91.171 requires periodic accuracy checks for IFR operations."
      },
      {
        q: "What does a FROM indication on a VOR CDI mean?",
        opts: ["The aircraft is flying toward the station", "The aircraft is on the far side of the station from the selected radial / station is behind", "The VOR is inoperative", "The OBS is set to an incorrect radial"],
        ans: 1,
        exp: "A FROM flag indicates the aircraft is on the selected radial, on the away side from the station (or that the station is behind the aircraft when tracking outbound). A TO flag means tracking toward the station."
      },
    ]
  }
];

// Progress storage keys
const STORAGE_KEY = 'flightdeck_progress';

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage unavailable
  }
}

function updateCardProgress(sgId, cardIndex, known) {
  const p = getProgress();
  if (!p.cards) p.cards = {};
  const key = `${sgId}_${cardIndex}`;
  p.cards[key] = known;
  saveProgress(p);
}

function updateQuizScore(sgId, score, total) {
  const p = getProgress();
  if (!p.quiz) p.quiz = {};
  const prev = p.quiz[sgId];
  p.quiz[sgId] = {
    score,
    total,
    pct: Math.round((score / total) * 100),
    date: new Date().toISOString(),
    best: prev ? Math.max(prev.best || 0, Math.round((score / total) * 100)) : Math.round((score / total) * 100)
  };
  saveProgress(p);
}

function getSGProgress(sgId) {
  const p = getProgress();
  const sg = STUDY_GUIDES.find(s => s.id === sgId);
  if (!sg) return { cards: 0, cardTotal: 0, quizBest: null };

  const cards = sg.flashcards;
  const cardsDone = cards.filter((_, i) => p.cards && p.cards[`${sgId}_${i}`] === true).length;
  const quizData = p.quiz && p.quiz[sgId];

  return {
    cards: cardsDone,
    cardTotal: cards.length,
    cardPct: Math.round((cardsDone / cards.length) * 100),
    quizBest: quizData ? quizData.best : null,
    quizDate: quizData ? quizData.date : null
  };
}

function resetAllProgress() {
  saveProgress({});
}
