// FlightDeck PPL — Gleim Study Guide Data (SGs 1-10)
// Source: Gleim Online Ground School, Pilot Cert 2 folder

const STUDY_GUIDES = [
  {
    id: 1,
    title: "Airplanes and Aerodynamics",
    stage: 1,
    icon: "✈",
    description: "Aircraft structures, flight controls, aerodynamic forces, stability, stalls, spins, ground effect, and left-turning tendencies.",
    driveId: "1c60QGyqPLQ9Eud4lLRujN--Tb3l64Wr5",
    flashcards: [
      { front: "What are the four main structural units of any conventional airplane?", back: "Fuselage, wings, empennage (tail section), and landing gear." },
      { front: "What is the difference between a nosewheel (tricycle) and a tailwheel (conventional) airplane?", back: "Nosewheel airplanes have the third wheel under the nose. Tailwheel airplanes have the third wheel under the tail." },
      { front: "What is the purpose of the nosewheel or tailwheel?", back: "To steer the airplane on the ground. It is not stressed for excessive impacts or loads — it carries only the weight of the forward or rearward portion of the airplane." },
      { front: "What is the advantage of retractable landing gear?", back: "It reduces drag and increases airplane performance during flight." },
      { front: "What is the primary function of the fuselage?", back: "It is the main structural component and serves as the common attachment point for all other major structural units. It also houses the crew, passengers, cargo, instruments, and essential equipment." },
      { front: "Describe the truss-type fuselage construction.", back: "A reinforced shell where the skin is supported by a rigid framework of structural members (steel or aluminum) that bear the main stress loads. Typically steel tubing welded to carry compression and tension loading." },
      { front: "Describe the monocoque fuselage type.", back: "Has little or no internal bracing other than bulkheads — the outer skin bears the main stress loads (single-shell construction). The biggest challenge is maintaining strength while keeping weight within limits." },
      { front: "Describe the semi-monocoque fuselage type.", back: "Overcomes monocoque challenges by adding a reinforcing substructure of bulkheads, formers, longerons, and stringers. The skin shares stress with this substructure. Can absorb considerable damage with no single piece being failure-critical." },
      { front: "What are longerons?", back: "Structural members that run lengthwise along the fuselage, joining multiple frame members in sequence. They share the main stress loads and allow a certain flexibility when supporting loads." },
      { front: "What are stringers?", back: "Lighter structural members used with greater frequency than longerons to bridge each frame member. They provide stiffness to the fuselage and a means to attach the external skin." },
      { front: "What is the dihedral angle?", back: "The angle at which the wings are slanted upward from the wing root to the wingtip. It contributes to lateral stability." },
      { front: "What is the difference between a cantilever and semi-cantilever wing?", back: "Cantilever: no external bracing — stress carried by internal spars, ribs, and stringers. Semi-cantilever: braced both externally by wing struts attached to the fuselage AND internally by spars and ribs." },
      { front: "Which wing type provides better ground visibility while airborne — high or low wing?", back: "High-wing airplanes provide better visibility of the ground when airborne (e.g., for sightseeing)." },
      { front: "Which wing type is more susceptible to wind while on the ground?", back: "High-wing airplanes are more susceptible to wind effects while on the ground." },
      { front: "What movable surfaces are attached to the trailing edges of the wings?", back: "Ailerons and wing flaps." },
      { front: "Where is fuel typically stored in single-engine airplanes?", back: "In tanks that are either an integral part of the wing structure or flexible containers (bladders) mounted inside the wing structure." },
      { front: "What two primary advantages do composite materials offer for aircraft construction?", back: "Extremely smooth skins and the ability to easily form complex curved or streamlined structures that reduce drag." },
      { front: "What is the most important disadvantage of composite construction?", back: "The lack of visual proof of damage. A low-energy impact may show no visible sign on the surface but may have extensive delaminations underneath in a cone-shaped area from the impact location." },
      { front: "What temperature limit applies to composite aircraft with epoxy resin?", back: "Epoxy in the composite degrades if exposed to temperatures exceeding 150°F. A white composite will rarely exceed 140°F in direct sunlight; a dark-colored one on asphalt could reach 220°F." },
      { front: "How is lightning strike protection provided in composite aircraft?", back: "Fine metal meshes (copper or aluminum) are bonded to the skin surfaces to conduct electricity away from fuel tanks and avionics systems." },
      { front: "What percentage of modern commercial airliners like the Boeing 787 are constructed of composite materials?", back: "More than 50%." },
      { front: "What is a whitish area in fiberglass structure a good indication of?", back: "Fiber fracture." },
      { front: "What are the three axes of rotation of an airplane?", back: "Lateral (pitch) axis — wingtip to wingtip. Longitudinal (roll) axis — nose to tail. Vertical (yaw) axis — vertically through the intersection of lateral and longitudinal axes." },
      { front: "What axis controls pitch, and what control surface moves it?", back: "The lateral axis. Controlled by the elevator." },
      { front: "What axis controls roll, and what control surface moves it?", back: "The longitudinal axis. Controlled by the ailerons." },
      { front: "What axis controls yaw, and what control surface moves it?", back: "The vertical axis. Controlled by the rudder." },
      { front: "Where do all three axes of an airplane intersect?", back: "At the airplane's center of gravity (CG). Each axis is perpendicular to the other two." },
      { front: "What are the three primary flight controls?", back: "Ailerons, elevator (or stabilator), and rudder." },
      { front: "Where are the ailerons located and what do they control?", back: "Located on the rear of each wing near the wingtips (outboard). They control roll — rotation about the longitudinal axis. They move in opposite directions." },
      { front: "What happens when the yoke is moved to the right?", back: "The right aileron deflects upward (decreasing lift on the right wing) and the left aileron moves down (increasing lift on the left wing), causing the airplane to roll right." },
      { front: "What is a differential aileron?", back: "An aileron where the upward-moving aileron deflects at a greater angle than the downward-moving aileron. This reduces adverse yaw by creating parasite drag to counter the induced drag of the downward aileron." },
      { front: "What is the empennage?", back: "The tail section. It consists of fixed surfaces (vertical stabilizer and horizontal stabilizer) and movable surfaces (rudder and elevator)." },
      { front: "What does the elevator control and how does it work?", back: "Controls pitch about the lateral axis. Pulling back deflects the trailing edge up, creating downward force on the tail, which pitches the nose up. Pushing forward lowers the elevator, reducing tail downforce and pitching nose down." },
      { front: "What is the function of the horizontal stabilizer?", back: "Provides longitudinal (pitch) stability. It acts as an inverted airfoil producing downforce on the tail, preventing the nose from pitching downward too much." },
      { front: "What is a stabilator?", back: "A one-piece horizontal stabilizer and elevator that pivots from a central hinge point. The entire surface moves to change its angle of attack and amount of lift." },
      { front: "What is a canard?", back: "A small horizontal wing located in front of the main wings. Unlike a horizontal stabilizer (which holds the nose up by pushing the tail down), a canard actually creates lift to hold the nose up." },
      { front: "What does the vertical stabilizer do?", back: "Provides directional stability, aligning the aircraft toward the relative airflow around the vertical axis." },
      { front: "How does the rudder work?", back: "Attached to the rear of the vertical stabilizer and controlled by rudder pedals. Pushing right pedal deflects rudder right, creating horizontal force that pushes the tail right and yaws the nose left. Controls yaw." },
      { front: "What is a rudder-aileron interconnect?", back: "A system that automatically deflects the rudder simultaneously with the ailerons to correct for aileron drag (adverse yaw). When rolling right, it pulls the right rudder pedal to limit leftward yaw." },
      { front: "Flight control effectiveness increases with what?", back: "Speed — because there is more airflow over the surface of the control device." },
      { front: "What are the three important functions of wing flaps?", back: "1) Permit slower landing speed (decreased required landing distance). 2) Permit steeper angle of descent without increased speed (clearing obstacles). 3) Can shorten takeoff distance and provide steeper climb path." },
      { front: "Where are flaps located and how do they differ from ailerons?", back: "Flaps are located inboard on the trailing edge of the wing. Unlike ailerons, they move together (both extend or retract simultaneously) and do not move in opposite directions." },
      { front: "What is a plain flap?", back: "A portion of the trailing edge of the wing on a hinged pivot that moves downward, changing the chord line, angle of attack, and camber of the wing." },
      { front: "What is a split flap and what is its unique characteristic?", back: "A hinged portion of only the bottom surface of the wing. Creates the least change in pitching moment but creates the greatest amount of drag." },
      { front: "What is a slotted flap and why is it the most common?", back: "Similar to a plain flap but with a gap between the trailing edge of the wing and the leading edge of the flap. High-pressure air from below is ducted to the upper surface, delaying airflow separation. Most common in general aviation today." },
      { front: "What is a Fowler flap?", back: "A type of slotted flap that not only tilts downward but also slides rearward on tracks. Increases angle of attack, wing camber, AND wing area. Provides additional lift without significantly increasing drag." },
      { front: "What is a slotted Fowler flap?", back: "Similar to a Fowler flap but with increased articulation. Adds energy back to airflow via additional slots. Increases camber as it extends further outward and downward. Ideal for approach and landing — slight lift increase with greater drag increase." },
      { front: "What is the range of flap extension angles?", back: "Flaps can extend from 30° to 40° when in the down position. They are flush with the wing's trailing edge when retracted." },
      { front: "What are spoilers and what do they do?", back: "High-drag devices mounted on the upper surface of each wing. When deployed, they disrupt airflow over the wings, reducing lift and increasing drag. Used to increase rate of descent without increasing speed. Found on gliders and some high-speed aircraft." },
      { front: "What is the purpose of trim systems?", back: "To relieve the pilot of the need to maintain constant pressure on the flight controls. Small airfoils attached to the trailing edge of primary control surfaces." },
      { front: "Which direction do trim tabs move relative to the primary control surface?", back: "Opposite direction. Example: if the trim tab is set to full nose-up position, the tab moves full DOWN — causing the tail to pitch down and nose to pitch up." },
      { front: "What is the proper technique for using trim tabs?", back: "Use control pressure (yoke or rudder pedals) to position the primary control first, THEN adjust the trim tab to relieve that control pressure. Trim tabs should NOT be used to position the primary control." },
      { front: "What is an antiservo tab?", back: "Attached to the trailing edge of the stabilator and moves in the SAME direction as the trailing edge of the stabilator. It deflects into the slipstream, providing resistance to prevent overcontrol. Can also be used as a trim tab." },
      { front: "What are fixed slots on a wing's leading edge?", back: "Gaps that direct airflow to the upper wing surface. They allow smooth airflow at higher angles of attack, delay airflow separation, do NOT increase wing camber, and delay stalls to a higher angle of attack." },
      { front: "What is a slat and how does it work?", back: "A leading edge segment free to move on tracks. At low angles of attack it sits flush. At high angles of attack (or pilot-operated), it moves forward, opening a slot that allows smooth airflow over the wing's upper surface, delaying separation. May increase wing camber and area." },
      { front: "What are the four basic aerodynamic forces acting on an airplane?", back: "Lift (upward), Weight (downward), Thrust (forward), and Drag (rearward)." },
      { front: "In steady, unaccelerated flight, what are the two equilibrium relationships?", back: "Lift = Weight and Thrust = Drag." },
      { front: "In what direction does lift act relative to the flight path?", back: "Perpendicular to the flight path, through the wing's center of lift." },
      { front: "In what direction does drag act relative to the relative wind?", back: "Rearward and parallel to the relative wind." },
      { front: "What are the three principal airfoils on an airplane?", back: "The wing, the propeller, and the horizontal tail surfaces." },
      { front: "State Bernoulli's Principle as it applies to wings.", back: "High-speed flow is associated with low pressure; low-speed flow is associated with high pressure. Air flowing over the curved upper wing surface accelerates, creating lower pressure above the wing than below, generating lift." },
      { front: "How does Newton's Third Law apply to lift?", back: "The lower surface of the wing deflects air downward (action force), which causes an equal and opposite upward reaction force (lift)." },
      { front: "What is the center of lift (CL)?", back: "Also called the center of pressure (CP). It is the single imaginary point that represents the resultant of all lift forces acting on the wing. Lift acts upward and perpendicular to the relative wind." },
      { front: "What five factors affect the amount of lift generated by a wing?", back: "1) Speed of the wing through the air, 2) Angle of attack, 3) Planform of the wing, 4) Wing area, 5) Air density." },
      { front: "What is weight as an aerodynamic force?", back: "The force caused by gravity accelerating the mass of the airplane toward the Earth, expressed in pounds. It acts vertically downward through the airplane's center of gravity (CG)." },
      { front: "What is the center of gravity (CG)?", back: "The imaginary point on the airplane at which all weight is considered to be concentrated — the point of balance. Located along the longitudinal centerline, forward of the center of lift." },
      { front: "What is the relationship between lift and weight in straight-and-level unaccelerated flight?", back: "Lift equals weight. If lift < weight, airplane loses altitude. If lift > weight, airplane gains altitude." },
      { front: "How does thrust work?", back: "Results from the propeller acting as an airfoil, producing the forward force that drives the airplane. Receives power directly from the engine. To maintain constant airspeed, thrust must equal drag." },
      { front: "What are the two main types of drag?", back: "Induced drag and parasite drag." },
      { front: "What causes induced drag?", back: "It is an unavoidable byproduct of lift. High pressure below the wing causes air to flow outward toward the wingtips and upward to the low-pressure area above, creating wingtip vortices and a downwash that tilts the lift vector rearward." },
      { front: "In which direction do wingtip vortices rotate when viewed from behind the airplane?", back: "Counterclockwise about the right wingtip and clockwise about the left wingtip." },
      { front: "How does induced drag relate to airspeed?", back: "Induced drag varies INVERSELY with the square of the airspeed. Reducing airspeed by half (e.g., 120 kt to 60 kt) increases induced drag by FOUR times. Greatest at low speeds/high angles of attack." },
      { front: "What is L/D ratio?", back: "The lift-to-drag ratio — the amount of lift generated by an airfoil compared to its drag. Indicates airfoil efficiency." },
      { front: "What is parasite drag?", back: "The resistance of the air as the airplane passes through it. Increases with streamlining, air density, and size of the object. Increases as the SQUARE of velocity (double speed = four times the parasite drag)." },
      { front: "What are the three types of parasite drag?", back: "Form drag (frontal area exposure), skin friction (surface roughness), and interference drag (airflow interference at intersections like wing-fuselage junctions)." },
      { front: "What reduces interference drag?", back: "Fairings — used to streamline intersections between adjacent parts of the airplane (e.g., wing-fuselage)." },
      { front: "How can skin friction be minimized?", back: "Applying a glossy, flat finish; eliminating protruding rivet heads, roughness, and irregularities; and keeping the airplane clean and waxed." },
      { front: "What is an airfoil?", back: "Any surface designed to obtain a desired reaction force (lift) when in motion relative to the surrounding air. Examples: airplane wing and propeller blade." },
      { front: "What is camber?", back: "The curvature of the airfoil from the leading edge to the trailing edge. Upper camber is the curve on top; lower camber is the curve on the bottom." },
      { front: "What is the chord line?", back: "An imaginary straight line drawn from the leading edge to the trailing edge of a cross section of an airfoil." },
      { front: "What is the mean camber line?", back: "The line running midway between the upper and lower camber of any airfoil section. Used to determine the airfoil's aerodynamic characteristics." },
      { front: "What is angle of attack (AOA)?", back: "The angle between the wing chord line and the direction of the relative wind. Always referenced to the flight path, not the ground." },
      { front: "What is the relative wind?", back: "The direction of airflow relative to the wing when the wing is moving through the air. It flows parallel with and opposite to the direction of flight." },
      { front: "What is the critical angle of attack?", back: "The AOA at which a wing stalls (maximum lift). Approximately 18° to 20° on most airfoils. Remains CONSTANT regardless of weight, airplane loading, airspeed, or other factors." },
      { front: "What is the angle of incidence?", back: "The fixed angle formed by the chord line of the wing and the longitudinal axis — the angle at which the wing is attached to the fuselage. Cannot be changed by the pilot. Different from AOA." },
      { front: "What is attitude?", back: "The relationship of the airplane to the horizon — measured in degrees of pitch (nose up or down) and bank (left or right)." },
      { front: "What is washout?", back: "A wing design in which the wing is twisted so the angle of incidence is less at the wingtip than at the wing root. This allows ailerons to remain effective after the wing root begins to stall." },
      { front: "What is the wing planform?", back: "The shape or form of a wing as viewed from above (long and tapered, short and rectangular, etc.)." },
      { front: "What is sweepback?", back: "The angle at which wings are slanted rearward from root to tip. When a wing drops during a disturbance, sweepback presents the lowered wing into the relative wind at a more favorable angle, aiding stability." },
      { front: "In steady-state flight, what is the relationship between AOA and airspeed?", back: "As airspeed increases, AOA must decrease, and vice versa. There is only one AOA for any given airspeed that maintains steady-state flight." },
      { front: "What is the lift coefficient (CL) and what factors determine it?", back: "A single variable that models all complex dependencies of shape, inclination, and flow conditions on lift. Depends on: compressibility of air, viscosity, wing surface area and shape, inclination of flow, air density, and velocity squared." },
      { front: "What is L/DMAX and why is it important?", back: "The airspeed at which the lift-to-drag ratio is maximum (minimum drag point). It is the best glide airspeed and also yields maximum range and maximum power-off glide range. Requires least thrust for level flight." },
      { front: "How does increasing AOA affect induced and parasite drag?", back: "Increasing AOA increases induced drag but decreases parasite drag (since airspeed decreases). Decreasing AOA decreases induced drag but increases parasite drag." },
      { front: "What are AOA indicators designed to address?", back: "Loss of control (LOC) accidents, specifically stall/spin scenarios. More than 25% of fatal GA accidents occur during maneuvering, with half involving stall/spin." },
      { front: "What is stall margin awareness?", back: "The margin between the current AOA at which the airfoil is operating and the critical AOA at which the airfoil will stall. Provided by AOA indicators." },
      { front: "Name five limitations of AOA indicator effectiveness.", back: "Calibration techniques, probes or vanes not being heated, the type of indicator itself, flap setting, and wing contamination." },
      { front: "What causes a stall?", back: "Exceeding the critical AOA — not low airspeed. A stall is always an aerodynamic effect, not an engine failure. An airplane can stall at any airspeed in any attitude." },
      { front: "Why does an airplane stall at the same indicated airspeed regardless of altitude?", back: "Because the airspeed indicator is directly related to air density. As altitude increases and air density decreases, the indicated airspeed remains the same even as true airspeed increases." },
      { front: "What happens aerodynamically as AOA is increased beyond the critical angle?", back: "Airstream separates from the upper wing surface. Turbulent airflow spreads forward over the entire upper surface, causing a sudden pressure increase and loss of lift. Form drag increases." },
      { front: "How do you recover from a stall?", back: "Decrease the AOA (release back elevator pressure or push elevator forward), then apply maximum allowable power smoothly to increase airspeed and minimize altitude loss. Level the wings with coordinated controls." },
      { front: "Why are wings designed with washout (less incidence at the tip)?", back: "So the wing roots stall before the wingtips. This keeps ailerons (near the tips) effective at high AOA and gives the airplane more stable stalling characteristics." },
      { front: "What is VS0?", back: "Power-off stall speed with gear and flaps in the landing configuration. Shown as the lower limit of the WHITE arc on the airspeed indicator." },
      { front: "What is VS1?", back: "Power-off stall speed with flaps and gear up (clean configuration). Shown as the lower limit of the GREEN arc on the airspeed indicator." },
      { front: "How does flap extension affect stall speed?", back: "Flap extension generally increases the lifting ability of the wings, thus REDUCING stall speed. VS0 (with flaps) is less than VS1 (clean)." },
      { front: "How does bank angle affect stall speed?", back: "Stall speed INCREASES in proportion to the square root of the load factor. Greater bank = higher load factor = higher stall speed." },
      { front: "Example: An airplane with a normal stall speed of 45 kt is subjected to 4G. What is the stall speed?", back: "90 kt. The stall speed increases in proportion to the square root of the load factor. √4 = 2. 45 kt × 2 = 90 kt." },
      { front: "How does CG position affect stall speed?", back: "Forward CG: higher stall speed but easier recovery (airplane tends to pitch nose down). Aft CG: lower stall speed but more difficult recovery — airplane loses natural tendency to pitch down." },
      { front: "What is the danger of an extremely aft CG in a stall?", back: "The airplane may enter a flat spin, and recovery from a flat spin may be impossible." },
      { front: "How does increased gross weight affect stall speed?", back: "Increases stall speed — heavier aircraft requires a higher AOA at a given airspeed, reaching critical AOA at a higher speed." },
      { front: "How does frost, ice, or snow on wings affect stall speed?", back: "Increases stall speed. Even a small accumulation changes the wing shape, disrupts smooth airflow, increases drag, and decreases lift." },
      { front: "How can turbulence cause a stall at higher than normal airspeed?", back: "A vertical gust or wind shear can cause a sudden change in relative wind, resulting in an abrupt increase in AOA. The stall can occur even in gusty conditions on approach." },
      { front: "Name five distractions that increase stall/spin risk.", back: "Locating a checklist, sightseeing/cellphone use, attempting a restart after engine failure, flying a traffic pattern on a windy day, reading a chart. (Also: fuel calculations, retrieving in-cabin items, avoiding an obstruction.)" },
      { front: "What are the five stall warning indicators a pilot should monitor?", back: "1) Vision (attitude/airspeed), 2) Hearing (decreasing tone intensity), 3) Kinesthesia (sensing changes in speed/direction), 4) Control pressures (decreasing resistance), 5) Stall warning horn or device." },
      { front: "Why should ailerons NOT be used during a stall?", back: "Using ailerons during a stall can deepen the stall and lead to a spin — the downward aileron increases AOA on an already stalled wing and causes adverse yaw." },
      { front: "Which control is LEAST affected during a stall?", back: "The rudder. It can normally be used to maintain directional control throughout the stall and recovery." },
      { front: "What must always happen before an airplane enters a spin?", back: "The airplane must first be stalled." },
      { front: "What is a spin?", back: "An aggravated stall resulting in autorotation, where the airplane follows a corkscrew path downward. One wing is less stalled than the other." },
      { front: "What causes the autorotation in a spin?", back: "The lowered wing has a greater AOA (further beyond critical AOA, more drag, less lift). The rising wing has a smaller AOA and develops some lift. This difference causes continued rolling and yawing." },
      { front: "What are the four phases of a spin?", back: "1) Entry — pilot provides conditions (stall + yaw), 2) Incipient — transition period, aerodynamic/inertial forces not yet balanced, 3) Developed — stabilized, nearly vertical flight path, 4) Recovery — controls applied, ends when level flight attained." },
      { front: "What is the PARE spin recovery technique?", back: "P — Power to idle. A — Ailerons to neutral. R — Rudder opposite of rotation. E — Elevator positive input forward of neutral." },
      { front: "What is a flat spin?", back: "A spin where the spin axis is located near the airplane's CG. Can occur with an aft CG. Recovery may be impossible." },
      { front: "For an airplane certified in the normal category, what spin certification is required?", back: "It must be recoverable from an incipient spin (not a fully developed spin beyond one turn). Intentional spinning of unapproved aircraft is prohibited and extremely dangerous." },
      { front: "What is ground effect?", back: "The result of interference of the ground (or water) surface with the airflow patterns about an airplane. The vertical component of airflow is restricted, altering upwash, downwash, and wingtip vortices." },
      { front: "What is the primary aerodynamic benefit of ground effect?", back: "Reduced wingtip vortices decrease induced drag — allowing the wing to require a lower AOA to produce the same lift coefficient, or produce more lift at a constant AOA." },
      { front: "Does ground effect reduce parasite drag?", back: "No. Ground effect has NO effect on parasite drag. It only reduces induced drag." },
      { front: "Within what altitude does ground effect become significant?", back: "Within one wingspan's length above the ground." },
      { front: "At what height (as fraction of wingspan) is the induced drag reduction approximately 23.5%?", back: "When the wing is at a height equal to one-fourth of its span." },
      { front: "At what height (as fraction of wingspan) is the induced drag reduction approximately 47.6%?", back: "When the wing is at a height equal to one-tenth of its span." },
      { front: "What hazard does ground effect create during takeoff?", back: "The airplane may become airborne below recommended speed because ground effect reduces drag. As it rises out of ground effect, the increased induced drag may result in marginal performance or the airplane settling back to the runway." },
      { front: "What are the three effects on an airplane LEAVING ground effect (takeoff)?", back: "1) Requires increased angle of attack to maintain same lift, 2) Induced drag and thrust required increase, 3) Stability decreases with a slight nose-up pitch." },
      { front: "What hazard does ground effect create during landing?", back: "The airplane may float down the runway when ground effect is encountered at excessive airspeeds, making it difficult to land in the intended touchdown zone." },
      { front: "In which wing type is ground effect more pronounced?", back: "Low-wing airplanes." },
      { front: "What force makes an airplane turn?", back: "The horizontal component of lift (when the wings are banked). The horizontal component counteracts centrifugal force (inertia) and pulls the airplane into the turn." },
      { front: "What is adverse yaw and what causes it?", back: "The tendency of the airplane to yaw OPPOSITE the direction of turn during banking. Caused by the increased drag of the downward-moving aileron (on the rising wing) compared to the upward aileron." },
      { front: "How do you counteract adverse yaw?", back: "Apply rudder pressure in the desired direction of turn simultaneously with the ailerons to produce a coordinated turn." },
      { front: "What happens to vertical lift in a bank?", back: "In a bank, the total lift splits into vertical (counteracting weight) and horizontal (counteracting centrifugal force) components. There is LESS vertical lift in a bank than in straight-and-level flight." },
      { front: "What must a pilot do to maintain altitude in a banked turn?", back: "Increase back pressure on the control yoke (increase AOA) and/or increase power to compensate for the reduced vertical lift component." },
      { front: "What effect do ailerons (not the rudder) have when used to counteract adverse yaw?", back: "Ailerons should NEVER be used to counteract adverse yaw. The rudder is used. Ailerons are not used to correct unwanted yaw." },
      { front: "What is an inherently stable airplane?", back: "One that returns to its original condition (position or attitude) after being disturbed. Requires less pilot effort to control." },
      { front: "What determines the longitudinal stability of an airplane?", back: "The location of the CG with respect to the center of lift (center of pressure)." },
      { front: "What is positive longitudinal stability?", back: "Results when the center of lift (CL) is behind the CG. The airplane tends to pitch nose-down when disturbed." },
      { front: "Why do most airplanes have CG slightly forward of the center of lift?", back: "To create a nose-down tendency, giving the airplane a natural tendency to pitch downward away from a stalling condition. This is offset by the downward force of the horizontal stabilizer." },
      { front: "What happens to longitudinal stability when CG moves forward?", back: "Stability increases (more nose-down tendency). However, stall recovery is easier because the airplane naturally pitches down." },
      { front: "What happens when the CG is at or aft of the aft CG limit?", back: "1) Inability to recover from stall conditions, 2) Less stable at all airspeeds, 3) Increased likelihood of inadvertent overstress." },
      { front: "Why do most airplanes pitch nose-down when power is reduced (without control input)?", back: "The downwash on the elevators from the propeller slipstream is reduced, decreasing elevator effectiveness, allowing the nose to drop." },
      { front: "What is static stability?", back: "The initial tendency an airplane displays after its equilibrium is disturbed. Can be positive (tends to return), neutral (stays in new position), or negative (continues away from original)." },
      { front: "What is dynamic stability?", back: "The overall tendency of the airplane after its equilibrium is disturbed, determined by oscillation. Can be positive (decreasing oscillations), neutral (constant oscillations), or negative (increasing oscillations)." },
      { front: "What is the most desirable combination of stability types?", back: "Positive static stability combined with positive dynamic stability — the airplane returns to original attitude directly or through decreasing oscillations." },
      { front: "What are the four main design factors that influence lateral stability?", back: "1) Wing dihedral, 2) Sweepback, 3) Keel effect (fuselage and vertical stabilizer), 4) Weight distribution." },
      { front: "How does wing dihedral contribute to lateral stability?", back: "When the airplane banks and sideslips toward the lower wing, dihedral causes air to strike the low wing at a greater angle of attack, generating more lift on that wing and restoring wings-level flight." },
      { front: "How does sweepback contribute to lateral stability?", back: "If one wing lowers in a slip, the low wing presents more area to the relative wind at a greater angle of attack, generating more lift and restoring level flight. Effect is similar to dihedral but less pronounced." },
      { front: "What is the keel effect?", back: "The steadying influence on the airplane laterally, produced by the fuselage and vertical stabilizer reacting to airflow. Most area is above and behind the CG, so when the airplane slips sideways, pressure against the keel area rolls and yaws it back to wings-level." },
      { front: "How does fuel distribution affect lateral stability?", back: "Unequal fuel distribution causes the airplane to roll toward the wing with more fuel. Correct by starting with equal fuel and using both tanks equally." },
      { front: "What happens in a steep banked turn regarding lateral stability?", back: "The increased lift on the outside wing overcomes lateral stability, causing overbanking. The pilot must apply slight aileron pressure opposite the turn." },
      { front: "What provides directional stability?", back: "The vertical stabilizer (fin) to the rear of the CG. Acts like a weathervane — when yawed, the relative wind exerts force on one side of the vertical stabilizer and returns the airplane to original direction." },
      { front: "What is Dutch roll?", back: "A combination rolling/yawing oscillation caused by wind gusts in turbulent air. Rolling motion precedes and is more noticeable than yawing. Each oscillation overshoots wings-level due to strong dihedral effect." },
      { front: "What is spiral instability?", back: "Occurs when directional stability is very strong compared to lateral stability. A sideslip causes yaw into the wind (increasing bank) and nose-down pitch, leading to an increasing spiral dive." },
      { front: "Why is spiral instability considered less objectionable than Dutch roll?", back: "The rate of divergence in spiral instability is so gradual that the pilot can easily control it, whereas Dutch roll is more uncomfortable and disorienting." },
      { front: "When is torque (left-turning tendency) greatest?", back: "At low airspeed, high angles of attack, and high power — e.g., on takeoff." },
      { front: "What are the four elements of torque (left-turning tendency)?", back: "1) Torque reaction from engine and propeller, 2) Corkscrewing effect of the slipstream, 3) Gyroscopic action (precession) of the propeller, 4) Asymmetrical loading of the propeller (P-factor)." },
      { front: "What is torque reaction?", back: "Based on Newton's Third Law. The propeller rotates clockwise (viewed from rear), producing a force that tends to roll the entire airplane counterclockwise (left) about the longitudinal axis." },
      { front: "What is the corkscrewing (spiraling slipstream) effect?", back: "The rotating propeller gives a corkscrew/spiraling clockwise rotation to the slipstream. At high power/low speed, this compact spiral strikes the left side of the vertical stabilizer, pushing the tail right and yawing the nose LEFT." },
      { front: "What is gyroscopic precession as it applies to aircraft?", back: "When a force is applied to a spinning rotor (propeller), the resultant force takes effect 90° ahead in the direction of rotation. For aircraft, pitching the propeller plane of rotation causes a yawing moment (and vice versa)." },
      { front: "During a tailwheel-type airplane takeoff, what gyroscopic effect occurs when the tail is raised?", back: "Raising the tail applies a force to the top of the propeller's plane of rotation. The resultant force acts 90° ahead (to the right side) causing a yawing moment to the LEFT." },
      { front: "What is P-factor (asymmetrical propeller loading)?", back: "At high angles of attack, the descending right propeller blade meets the relative wind at a greater angle of attack and velocity than the ascending left blade. The descending blade produces more thrust, causing the airplane to yaw LEFT." },
      { front: "What corrective control is used during takeoff to counteract left-turning tendency?", back: "Apply sufficient right rudder pressure." },
      { front: "What is load factor?", back: "The ratio of the lifting force produced by the wings to the actual weight of the airplane and its contents. Expressed in Gs. Load factor = total lift / weight." },
      { front: "What is the load factor in straight-and-level unaccelerated flight?", back: "1G — the wings are producing lift equal to the gross weight of the airplane." },
      { front: "What is the load factor in a 60° bank level turn?", back: "2.0 Gs — the wings must support twice the weight of the airplane." },
      { front: "What is the load factor in a 50° bank level turn?", back: "Approximately 1.5 Gs." },
      { front: "At what bank angle does the load factor exceed 6.0 Gs?", back: "At slightly more than 80° bank angle." },
      { front: "What is the approximate maximum bank for conventional light airplanes and why?", back: "60°, which produces a load factor of 2.0 Gs." },
      { front: "What are the load factor limits for the normal category?", back: "Maximum +3.8 positive Gs and -1.52 negative Gs. Permissible maneuvers: normal operations, stalls, lazy eights, chandelles, and steep turns up to (not exceeding) 60° bank." },
      { front: "What are the load factor limits for the utility category?", back: "Maximum +4.4 positive Gs and -1.76 negative Gs. Includes all normal category maneuvers plus spins (if approved) and steep turns exceeding 60°." },
      { front: "What are the load factor limits for the acrobatic category?", back: "Maximum +6.0 positive Gs and -3.0 negative Gs. No restrictions except those required by flight tests." },
      { front: "What is a positive load factor?", back: "Occurs when back pressure is applied to the elevator, causing centrifugal force to act in the SAME direction as weight." },
      { front: "What is a negative load factor?", back: "Occurs when forward pressure is applied to the elevator, causing centrifugal force to act in the OPPOSITE direction from weight." },
      { front: "How does load factor affect stall speed?", back: "Stall speed increases in proportion to the square root of the load factor. Higher load factor = higher stall speed." },
      { front: "What is a V-G diagram?", back: "A graphic representation of the operating limitations (velocity vs. G-loads) of a specific airplane. Shows airspeed on the horizontal axis and load factor (G) on the vertical axis. Defines the flight envelope." },
      { front: "What is VA (design maneuvering speed)?", back: "The maximum speed at which full one-sided control deflection or maximum design load can be applied without structural damage. On the V-G diagram, it is the intersection of the positive limit load factor line and the maximum lift line." },
      { front: "Why is VA not marked on the airspeed indicator?", back: "Because it varies with gross weight. It is found in the POH or on a cockpit placard." },
      { front: "What is the general rule for estimating VA?", back: "Approximately 1.7 times the normal stalling speed." },
      { front: "How does VA change with aircraft weight?", back: "VA decreases as weight decreases. A lighter airplane is subject to more rapid acceleration from turbulence and has a lower stall speed, thus a lower VA." },
      { front: "What is VNO?", back: "Maximum structural cruising speed (maximum normal operating speed). Shown as the UPPER LIMIT of the GREEN arc on the airspeed indicator." },
      { front: "What is VNE?", back: "Never-exceed speed. Marked by the RED LINE on the airspeed indicator. Exceeding VNE may cause structural damage or failure." },
      { front: "What is the yellow arc on the airspeed indicator (caution range)?", back: "The airspeed range from VNO to VNE. Flight in this range should be conducted only in smooth air and with caution." },
      { front: "What is the caution about flying at or below VA?", back: "Flying at or below VA does NOT allow a pilot to make multiple large control inputs in one axis or full control inputs in more than one axis simultaneously. Certain gusts may cause excessive loads even at speeds below VA." },
    ],
    quiz: [
      {
        q: "What are the four primary structural units of any conventional airplane?",
        opts: ["Fuselage, wings, engine, and propeller", "Fuselage, wings, empennage, and landing gear", "Cockpit, wings, fuel tanks, and landing gear", "Wings, ailerons, tail, and rudder"],
        ans: 1,
        exp: "Conventional airplanes have four primary structural units: fuselage (main body), wings (lifting surfaces), empennage (tail section), and landing gear."
      },
      {
        q: "Which type of fuselage construction uses bulkheads, longerons, stringers, and a stressed outer skin to share stress loads?",
        opts: ["Truss type", "Monocoque type", "Semi-monocoque type", "Cantilever type"],
        ans: 2,
        exp: "Semi-monocoque construction uses bulkheads + formers + longerons + stringers + a stressed outer skin together to bear stress loads. No single piece is failure-critical."
      },
      {
        q: "A truss-type fuselage is characterized by:",
        opts: ["A single shell with no internal bracing", "A complex rigid framework of structural members carrying main loads", "Stressed outer skin only", "Carbon-fiber composite construction"],
        ans: 1,
        exp: "The truss type is a reinforced framework (typically welded steel tubing) that carries the compression and tension loads. Light single-engine aircraft may use bolted aluminum alloy."
      },
      {
        q: "A nosewheel (tricycle) landing gear has:",
        opts: ["Two wheels under the wings and one wheel under the tail", "Two main wheels and a third wheel in FRONT of the main gear", "Three wheels arranged in a triangular pattern under the fuselage", "Two main wheels under the wings and one steerable tailwheel"],
        ans: 1,
        exp: "Tricycle gear has two main wheels plus a nosewheel in FRONT of the mains. Tailwheel (conventional) gear has the third wheel behind, under the tail."
      },
      {
        q: "The PRIMARY advantage of retractable landing gear is:",
        opts: ["Lower maintenance cost", "Reduced drag and improved performance in cruise flight", "Smoother taxi over rough surfaces", "Allows operation from grass strips"],
        ans: 1,
        exp: "Retractable gear retracts into the wing or fuselage during flight, reducing drag and significantly improving airplane performance, especially at higher cruise speeds."
      },
      {
        q: "What is wing dihedral?",
        opts: ["The forward sweep of the wing leading edge", "The downward angle of the wing trailing edge", "The upward angle of the wing from root to tip", "The angle between the wing chord line and the fuselage"],
        ans: 2,
        exp: "Dihedral is the upward angle of the wings from the wing root to the wingtip. It contributes to lateral stability by causing the lower wing in a sideslip to have a greater AOA."
      },
      {
        q: "Which is the MOST significant disadvantage of composite aircraft construction?",
        opts: ["Heavier than aluminum", "Lack of visual proof of damage from impacts", "Susceptibility to corrosion", "Poor performance in flexing environments"],
        ans: 1,
        exp: "Composites can suffer extensive internal damage (delaminations) with little or no surface evidence. Even a tool drop or minor impact may require expert inspection."
      },
      {
        q: "The three axes of an airplane all intersect at:",
        opts: ["The center of lift", "The center of gravity", "The aerodynamic center", "The leading edge of the wing"],
        ans: 1,
        exp: "All three axes (longitudinal, lateral, vertical) pass through and intersect at the center of gravity. Each is perpendicular to the other two."
      },
      {
        q: "Rotation about the lateral axis is called:",
        opts: ["Roll, controlled by ailerons", "Pitch, controlled by elevator", "Yaw, controlled by rudder", "Bank, controlled by ailerons and rudder"],
        ans: 1,
        exp: "The lateral axis runs wingtip-to-wingtip. Rotation around it is PITCH, controlled by the elevator (or stabilator). Also called 'longitudinal control'."
      },
      {
        q: "Rotation about the longitudinal axis is called:",
        opts: ["Pitch, controlled by elevator", "Roll, controlled by ailerons", "Yaw, controlled by rudder", "Slip, controlled by rudder"],
        ans: 1,
        exp: "Longitudinal axis runs nose-to-tail. Rotation around it is ROLL, controlled by ailerons. Also called 'lateral control' or 'lateral stability'."
      },
      {
        q: "Which control surface controls movement around the VERTICAL axis?",
        opts: ["Ailerons", "Elevator", "Rudder", "Spoilers"],
        ans: 2,
        exp: "The rudder controls yaw (rotation around the vertical axis). Ailerons control roll, and the elevator controls pitch."
      },
      {
        q: "Adverse yaw during a turn entry is caused by:",
        opts: ["P-factor at high angles of attack", "The down aileron creating more drag on the outside wing", "Engine torque reaction", "Centrifugal force during the bank"],
        ans: 1,
        exp: "When ailerons are deflected, the down aileron (on the rising/outside wing) creates more drag than the up aileron. This drag yaws the nose AWAY from the direction of turn. Rudder corrects."
      },
      {
        q: "A differential aileron is designed to:",
        opts: ["Increase roll rate at low speeds", "Reduce adverse yaw by creating more drag on the up-going aileron side", "Reduce stall speed in turns", "Allow the ailerons to act as flaps"],
        ans: 1,
        exp: "Differential ailerons deflect the up-aileron through a GREATER angle than the down-aileron. This creates parasite drag on the up-aileron side to counter the down-aileron's induced drag, reducing adverse yaw."
      },
      {
        q: "What is the function of the elevator?",
        opts: ["Controls roll about the longitudinal axis", "Controls yaw about the vertical axis", "Controls pitch about the lateral axis", "Provides directional stability"],
        ans: 2,
        exp: "The elevator is the primary pitch control surface, operating around the lateral axis. Pulling the yoke back deflects it up, pushing the tail down and nose up."
      },
      {
        q: "An antiservo tab on a stabilator moves:",
        opts: ["Opposite to the stabilator's trailing edge", "In the SAME direction as the stabilator's trailing edge", "Only when the autopilot is engaged", "Independently to relieve elevator pressure"],
        ans: 1,
        exp: "An antiservo tab moves in the SAME direction as the stabilator trailing edge. This creates resistance that prevents over-control, giving the pilot proper control feel. Can also serve as a trim tab."
      },
      {
        q: "The MOST common type of flap on modern general aviation aircraft is the:",
        opts: ["Plain flap", "Split flap", "Slotted flap", "Fowler flap"],
        ans: 2,
        exp: "Slotted flaps are most common on GA aircraft. The slot allows high-pressure air from the lower surface to flow to the upper surface of the flap, delaying airflow separation and improving lift."
      },
      {
        q: "A Fowler flap differs from a slotted flap in that the Fowler flap:",
        opts: ["Only lowers; does not extend rearward", "Extends rearward AND tilts downward, increasing wing area", "Cannot produce as much lift", "Is fixed in position"],
        ans: 1,
        exp: "Fowler flaps slide rearward on tracks AND tilt downward, increasing the angle of attack, camber, AND wing area. They provide additional lift without significantly increasing drag."
      },
      {
        q: "Spoilers on the upper wing surface are used to:",
        opts: ["Increase lift during landing", "'Spoil' airflow and reduce lift while increasing drag", "Provide directional control", "Reduce induced drag"],
        ans: 1,
        exp: "Spoilers are high-drag devices on the upper wing surface that disrupt smooth airflow when deployed. They reduce lift and increase drag — useful for descents without speed increase, and (on some aircraft) for lateral control."
      },
      {
        q: "Trim tabs should be used:",
        opts: ["To position the primary control surface, then held during flight", "Only during takeoff and landing", "AFTER establishing the desired control input, to relieve control pressure", "Only on the rudder"],
        ans: 2,
        exp: "Set the primary control with the yoke/pedals first, then adjust trim to relieve the held pressure. Never use trim tabs to actually position the primary control."
      },
      {
        q: "Fixed slots on the leading edge of a wing:",
        opts: ["Increase wing camber and provide more lift at low AOA", "Direct airflow over the upper wing surface, delaying airflow separation and stall to a higher AOA", "Provide a backup if leading-edge devices fail", "Reduce drag at high speeds"],
        ans: 1,
        exp: "Fixed slots direct airflow to the upper wing surface, allowing smooth airflow at higher AOAs. They delay airflow separation and stall — they do NOT increase wing camber."
      },
      {
        q: "The four basic aerodynamic forces in flight are:",
        opts: ["Lift, weight, thrust, drag", "Lift, gravity, power, friction", "Vertical, horizontal, thrust, drag", "Centripetal, centrifugal, lift, weight"],
        ans: 0,
        exp: "The four basic forces: LIFT (upward), WEIGHT (downward), THRUST (forward), DRAG (rearward). In steady level flight: Lift = Weight, Thrust = Drag."
      },
      {
        q: "In straight-and-level unaccelerated flight, what is the relationship between the forces?",
        opts: ["Lift > Weight and Thrust > Drag", "Lift = Weight and Thrust = Drag", "Lift = Thrust and Weight = Drag", "The sum of all forces equals weight"],
        ans: 1,
        exp: "Equilibrium requires Lift = Weight (vertical equilibrium) and Thrust = Drag (horizontal equilibrium). Any change in one force causes acceleration in that direction."
      },
      {
        q: "Bernoulli's Principle, as applied to a wing, states:",
        opts: ["Air pressure increases as airspeed increases", "Air pressure decreases at points where air speed increases", "Lift equals weight at all airspeeds", "Air density decreases with altitude"],
        ans: 1,
        exp: "Bernoulli's: as fluid speed increases, internal pressure decreases. Air accelerates over the cambered upper wing surface, lowering pressure above the wing relative to below it — generating lift."
      },
      {
        q: "What is the center of pressure (CP)?",
        opts: ["The single point along the chord line where total lift forces are considered concentrated", "The center of the wing in spanwise direction", "The location of the maximum wing thickness", "The point where ailerons attach to the wing"],
        ans: 0,
        exp: "Center of pressure (also called center of lift) is the single point along the chord line where all aerodynamic lift forces are considered to act."
      },
      {
        q: "Induced drag is a by-product of:",
        opts: ["Friction between air and the aircraft skin", "Lift generation (wingtip vortices)", "Form drag at the leading edge", "Engine thrust"],
        ans: 1,
        exp: "Induced drag is created as a by-product of lift. Wingtip vortices form as high-pressure air below the wing curls around to the low-pressure region above, creating downwash that bends the lift vector rearward."
      },
      {
        q: "How does induced drag vary with airspeed?",
        opts: ["Directly proportional to airspeed", "Inversely proportional to the SQUARE of airspeed", "Directly proportional to the square of airspeed", "Independent of airspeed"],
        ans: 1,
        exp: "Induced drag varies INVERSELY with the square of airspeed. Halving airspeed (120 to 60 kt) quadruples induced drag, because slower flight requires higher AOA."
      },
      {
        q: "How does parasite drag vary with airspeed?",
        opts: ["Inversely proportional to airspeed", "Directly proportional to airspeed", "Increases as the SQUARE of velocity", "Independent of airspeed"],
        ans: 2,
        exp: "Parasite drag increases as the square of velocity. Doubling airspeed produces FOUR TIMES the parasite drag."
      },
      {
        q: "The airspeed at which an airplane has its maximum L/D ratio is also the:",
        opts: ["Best rate of climb (Vy)", "Best angle of climb (Vx)", "Best glide speed and maximum range speed", "Maneuvering speed (Va)"],
        ans: 2,
        exp: "At L/D MAX, drag is minimum and L/D is maximum. This is the airspeed for: maximum range (least fuel/mile) AND maximum power-off glide (best glide speed)."
      },
      {
        q: "The angle of attack is defined as the angle between the:",
        opts: ["Wing chord line and the relative wind", "Wing chord line and the horizon", "Longitudinal axis and the flight path", "Wing chord line and the fuselage longitudinal axis"],
        ans: 0,
        exp: "AOA is the angle between the wing's CHORD LINE and the RELATIVE WIND. It's always referenced to the flight path, not the ground or horizon."
      },
      {
        q: "The angle of incidence is:",
        opts: ["The same as angle of attack", "The angle between the wing chord line and the longitudinal axis of the airplane", "Adjustable by the pilot in flight", "The angle of the propeller blades"],
        ans: 1,
        exp: "Angle of incidence is the fixed angle at which the wing is attached to the fuselage, between the wing chord line and the longitudinal axis. It is set by design and cannot be changed by the pilot."
      },
      {
        q: "A wing stalls when:",
        opts: ["Airspeed falls below a published number", "The engine fails", "The critical angle of attack is exceeded", "The wing flaps are fully extended"],
        ans: 2,
        exp: "A stall is caused by exceeding the critical angle of attack — NOT by airspeed alone. A wing can stall at ANY airspeed, in ANY attitude, at ANY power setting."
      },
      {
        q: "The critical angle of attack of a given airfoil:",
        opts: ["Decreases with altitude", "Increases at higher airspeeds", "Remains constant regardless of weight, bank, or airspeed", "Varies with center of gravity location"],
        ans: 2,
        exp: "The critical AOA is a fixed property of the airfoil — it does NOT change with airspeed, weight, bank angle, density altitude, or CG location. Only the airspeed at which it's reached varies."
      },
      {
        q: "An airplane stalls at the same indicated airspeed regardless of altitude because:",
        opts: ["The atmospheric pressure is corrected by the altimeter", "The airspeed indicator measures dynamic pressure, which is related to air density", "Stall speed is set by the aircraft manufacturer", "True airspeed equals indicated airspeed at all altitudes"],
        ans: 1,
        exp: "The ASI is calibrated to read dynamic pressure (½ρV²). Since lift depends on the same factor, the IAS at which the wing reaches critical AOA stays constant regardless of altitude."
      },
      {
        q: "VS0 (lower limit of the white arc) represents:",
        opts: ["Stall speed in the clean (flaps and gear up) configuration", "Stall speed in the landing configuration (full flaps and gear down)", "Maximum flap extended speed", "Best glide speed"],
        ans: 1,
        exp: "VS0 is the power-off stall speed in the LANDING configuration (flaps and gear fully extended). It defines the LOWER end of the white arc. VS1 (lower green arc) is clean stall speed."
      },
      {
        q: "If an airplane's published stall speed is 50 kt, what is its stall speed at 4 G's?",
        opts: ["50 kt", "100 kt", "200 kt", "25 kt"],
        ans: 1,
        exp: "Stall speed increases with the SQUARE ROOT of load factor. √4 = 2, so 50 × 2 = 100 kt. This is why steeper banks (higher load factors) in level turns dramatically raise stall speed."
      },
      {
        q: "An aft CG affects stall recovery how?",
        opts: ["Makes recovery easier due to greater nose-down tendency", "Makes recovery harder; may lead to a flat spin from which recovery is impossible", "Has no effect on stall recovery", "Allows recovery only with full power"],
        ans: 1,
        exp: "Aft CG reduces the natural nose-down pitching tendency that aids stall recovery. Extreme aft CG can lead to a flat spin, from which recovery may be impossible."
      },
      {
        q: "Frost on the wings prior to takeoff is dangerous because it:",
        opts: ["Adds significant weight to the aircraft", "Disrupts smooth airflow, increases drag, and increases stall speed", "Causes the wing to freeze in place", "Has no significant effect"],
        ans: 1,
        exp: "Even thin layers of frost disrupt the smooth airflow over the wing, increasing drag and the stall speed. NEVER take off with frost, ice, or snow on the wings."
      },
      {
        q: "During a power-off stall recovery, the FIRST action should be to:",
        opts: ["Add full power", "Reduce the angle of attack by releasing back pressure", "Raise the nose to gain altitude", "Apply opposite rudder"],
        ans: 1,
        exp: "The PRIMARY cause of a stall is excessive AOA. Always REDUCE AOA first by releasing back pressure or pushing forward. Then add max allowable power smoothly."
      },
      {
        q: "What is required for an airplane to enter a spin?",
        opts: ["Only one wing must be stalled", "BOTH wings must be stalled, with one wing more stalled than the other", "The engine must fail", "Excessive bank angle alone"],
        ans: 1,
        exp: "Both wings must first be stalled. Then if the airplane yaws, one wing becomes less stalled than the other → autorotation begins → spin develops."
      },
      {
        q: "The PARE spin recovery procedure stands for:",
        opts: ["Pitch, Aileron, Rudder, Elevator", "Power, Aileron, Rudder, Elevator", "Power, Attitude, Rate, Engine", "Pitch, Altitude, Rate, Energy"],
        ans: 1,
        exp: "PARE: Power to idle, Ailerons to neutral, Rudder opposite the spin rotation, Elevator forward of neutral. (Always use POH-specific procedure if available.)"
      },
      {
        q: "Ground effect is most pronounced when the aircraft is within how high?",
        opts: ["Within one wingspan above the surface", "Within 100 ft AGL", "Within 1,000 ft AGL", "Throughout the traffic pattern altitude"],
        ans: 0,
        exp: "Ground effect occurs within approximately one wingspan of the surface. Its effect on induced drag grows dramatically as the wing gets closer: ~1.4% at one wingspan, ~47.6% at 1/10 wingspan."
      },
      {
        q: "On takeoff, a danger of ground effect is that:",
        opts: ["The aircraft becomes uncontrollable in roll", "The aircraft may lift off below recommended airspeed and settle back when climbing out", "Engine power decreases substantially", "Flap effectiveness is reduced"],
        ans: 1,
        exp: "Reduced induced drag in ground effect can make the aircraft seem ready to fly below recommended takeoff speed. When climbing out of ground effect, the increased induced drag may cause the aircraft to settle back to the runway."
      },
      {
        q: "What causes an airplane to TURN?",
        opts: ["The rudder yawing the nose around", "The horizontal component of lift when the wings are banked", "Differential aileron deflection alone", "Engine torque combined with rudder input"],
        ans: 1,
        exp: "Banking divides total lift into vertical and horizontal components. The HORIZONTAL component pulls the aircraft into the turn against centrifugal force. Rudder controls yaw, not the turn itself."
      },
      {
        q: "To maintain altitude in a level turn, the pilot must:",
        opts: ["Reduce back pressure", "Add back pressure and/or increase power to maintain total lift", "Reduce power and trim nose-down", "Lower the flaps"],
        ans: 1,
        exp: "In a bank, vertical lift component decreases. To maintain altitude, the pilot must INCREASE total lift by adding back pressure (higher AOA) and/or adding power."
      },
      {
        q: "Positive STATIC stability is best illustrated by:",
        opts: ["A ball on a flat level surface", "A ball at the bottom of a bowl", "A ball on top of an inverted bowl", "A ball rolling down a ramp"],
        ans: 1,
        exp: "Positive static stability — initial tendency to RETURN to original position. Illustrated by a ball that rolls back to the bottom of a bowl when displaced."
      },
      {
        q: "Positive longitudinal stability requires that the center of lift be:",
        opts: ["At the same point as the center of gravity", "FORWARD of the center of gravity", "AFT of the center of gravity (so a forward CG creates nose-down tendency)", "Above the center of gravity"],
        ans: 2,
        exp: "Positive longitudinal stability when CL is BEHIND CG. Most aircraft have CG slightly forward of CL — creating a nose-down tendency that's offset by the tail's downward force (an inverted airfoil)."
      },
      {
        q: "Which provides lateral stability through dihedral effect?",
        opts: ["When the lower wing in a sideslip experiences a greater AOA, restoring level flight", "When dihedral angles cause higher wingtip lift in all conditions", "When the rudder counteracts adverse yaw", "When the vertical stabilizer aligns the aircraft with the wind"],
        ans: 0,
        exp: "When the aircraft sideslips toward a lowered wing, the lower wing meets the relative wind at a greater AOA → more lift on that wing → restores level flight."
      },
      {
        q: "Dutch roll is characterized by:",
        opts: ["A pure roll with no yaw component", "Combination rolling/yawing oscillation in turbulent air, with roll preceding yaw", "A spiral instability with increasing bank", "A flat spin tendency"],
        ans: 1,
        exp: "Dutch roll: oscillating roll/yaw caused by strong dihedral effect overshooting wings-level. Roll precedes yaw and is more noticeable. Designers often increase directional stability to suppress it."
      },
      {
        q: "Spiral instability develops when:",
        opts: ["Lateral stability is much stronger than directional stability", "Directional stability is much stronger than lateral stability", "Both stabilities are perfectly balanced", "The aircraft is in inverted flight"],
        ans: 1,
        exp: "When directional stability exceeds lateral stability, a sideslip causes the aircraft to yaw back into the wind quickly while bank persists. Outside wing gains lift → bank steepens → slow spiral descent."
      },
      {
        q: "Which four factors create the left-turning tendency in single-engine propeller airplanes?",
        opts: ["Engine vibration, prop wash, wing dihedral, sweepback", "Torque reaction, corkscrewing slipstream, gyroscopic precession, P-factor", "Adverse yaw, parasite drag, induced drag, ground effect", "Bernoulli effect, Newton's 3rd law, gyroscopic effect, slipstream"],
        ans: 1,
        exp: "Four elements of left-turning tendency: (1) Torque reaction (Newton's 3rd), (2) Corkscrewing slipstream (strikes left of vertical stabilizer), (3) Gyroscopic precession, (4) P-factor (asymmetric prop loading at high AOA)."
      },
      {
        q: "Left-turning tendency is GREATEST during:",
        opts: ["Cruise flight at high altitude", "Takeoff and climb (high power, low airspeed, high AOA)", "Approach to landing with idle power", "Steep level turns"],
        ans: 1,
        exp: "All four left-turning tendencies are strongest at high power + low airspeed + high AOA — exactly the conditions during takeoff and climb. Substantial RIGHT RUDDER is needed to track straight."
      },
      {
        q: "P-factor causes a yaw to the LEFT because at high AOA, the:",
        opts: ["Propeller is rotating clockwise viewed from the rear", "Descending blade on the right has a higher effective AOA, producing more thrust", "Slipstream wraps around the fuselage", "Gyroscopic precession yaws the nose left"],
        ans: 1,
        exp: "At high AOA, the descending blade (right side viewed from rear) has a greater effective AOA than the ascending blade. More thrust on the right side pulls the nose to the LEFT."
      },
      {
        q: "Gyroscopic precession in a rotating propeller:",
        opts: ["Causes the propeller to spin faster", "Produces a reaction 90° AHEAD in the direction of rotation when force is applied", "Causes the propeller to wobble in flight", "Eliminates vibration from the engine"],
        ans: 1,
        exp: "Gyroscopic precession: a force applied to a spinning gyro produces an effect 90° ahead in the direction of rotation. Most noticeable in tailwheel aircraft when the tail rises on takeoff (yaws the nose left)."
      },
      {
        q: "Most airplanes (except T-tail designs) tend to pitch DOWN when power is reduced because:",
        opts: ["The elevator becomes less effective", "Reduced propeller slipstream decreases the downwash on the elevator, reducing tail-down force", "The CG shifts forward when fuel burns", "Air density changes around the tail"],
        ans: 1,
        exp: "Conventional designs rely on propeller slipstream creating downwash on the elevator/horizontal stabilizer. Reduced power = less downwash = less tail-down force = nose drops."
      },
      {
        q: "The angle of attack at which a wing stalls is approximately:",
        opts: ["5° to 10°", "18° to 20° on most airfoils", "30° to 35°", "Zero degrees"],
        ans: 1,
        exp: "Critical AOA is typically 18° to 20° on most airfoils. Beyond this angle, the airflow separates from the upper surface, lift drops dramatically, and the wing stalls."
      },
      {
        q: "Washout (the wing tip having less incidence than the root) is designed so that:",
        opts: ["The wing tips stall before the wing roots", "The wing roots stall before the wing tips, preserving aileron control", "Roll authority is increased at low speed", "Cruise drag is reduced"],
        ans: 1,
        exp: "Washout makes the wing roots reach critical AOA first. The wing tips (where ailerons are) remain unstalled longer, preserving roll control through the stall."
      },
      {
        q: "Lift is generated by an airfoil due to:",
        opts: ["Only Bernoulli's principle", "Only Newton's 3rd law", "Both Bernoulli's principle (pressure differential) AND Newton's 3rd law (downwash reaction)", "Centripetal force"],
        ans: 2,
        exp: "Lift is the combined effect: Bernoulli's principle creates lower pressure over the curved upper surface, and Newton's 3rd law produces an upward reaction force as the wing deflects air downward."
      },
      {
        q: "When viewed from BEHIND the airplane, the wingtip vortex on the LEFT wing rotates:",
        opts: ["Clockwise", "Counterclockwise", "It does not rotate", "Vertically only"],
        ans: 0,
        exp: "From behind: the LEFT wingtip vortex rotates CLOCKWISE; the RIGHT wingtip rotates COUNTERCLOCKWISE. Both spiral inward and upward beyond the wingtip."
      },
      {
        q: "Which form of parasite drag is MOST DIFFICULT to reduce?",
        opts: ["Form drag", "Skin friction", "Interference drag", "Induced drag"],
        ans: 1,
        exp: "Skin friction is hardest to reduce — no surface is perfectly smooth, even when machined. Minimized by glossy/flat finishes, eliminating protruding rivets, keeping the aircraft clean and waxed."
      },
      {
        q: "Interference drag is caused by:",
        opts: ["Frontal area of components", "Microscopic roughness on surfaces", "Airflow interference at intersections of aircraft components (wing/fuselage)", "Pilot deflection of control surfaces"],
        ans: 2,
        exp: "Interference drag arises where adjacent components meet (wing/fuselage, tail/fuselage). Fairings smooth these intersections to reduce drag."
      },
    ]
  },
  {
    id: 2,
    title: "Airplane Instruments, Engines, and Systems",
    stage: 1,
    icon: "⊙",
    description: "Compass, pitot-static, airspeed indicator and all V-speeds, altimeter and altitude types, gyroscopic instruments, engine systems, propellers, ignition, fuel/air mixture, carburetor icing, and electrical systems.",
    driveId: "1VTKorUT505EkZK3Pb_SoTf97hP0C19Lz",
    flashcards: [
      { front: "What is the PRIMARY use of the magnetic compass in flight?", back: "To set the heading indicator prior to flight and to verify its continued accuracy during flight." },
      { front: "What makes the magnetic compass the ONLY self-contained direction-seeking instrument in the airplane?", back: "It requires no external power source — it operates solely on Earth's magnetic field." },
      { front: "What liquid fills the compass bowl, and what are its THREE functions?", back: "White kerosene. Functions: (1) decreases oscillations, (2) lubricates the pivot point, (3) provides buoyancy to reduce weight on the pivot." },
      { front: "How many degrees can the compass float assembly tilt on its pivot?", back: "Up to 18°." },
      { front: "On a compass card, how is 300° displayed?", back: "As '30' (the last zero is omitted from each 30° interval label)." },
      { front: "Between the 30° interval numbers, how is the compass card graduated?", back: "Every 5°." },
      { front: "Define compass DEVIATION error.", back: "The difference between the heading indicated by the magnetic compass in an airplane and the airplane's actual magnetic heading, caused by local magnetic fields within the aircraft." },
      { front: "What causes compass deviation error?", back: "Local magnetic fields from electrical current in the structure, nearby wiring, certain metals, or magnetized parts — these conflict with Earth's magnetic field." },
      { front: "What is 'swinging the compass,' and what happens to remaining errors?", back: "A periodic compensation/adjustment procedure. Remaining errors are recorded on a compass correction card mounted near the compass." },
      { front: "When can a magnetic compass be considered accurate in flight?", back: "Only during straight-and-level flight at a constant airspeed." },
      { front: "Why does deviation change when the airplane changes heading?", back: "The metallic and electrical equipment in the airplane changes position relative to the compass needles as the airplane turns, altering their magnetic influence." },
      { front: "Define magnetic DIP error.", back: "The tendency of the compass needles to point downward toward the magnetic pole as well as horizontally. Greatest at the poles, zero at the magnetic equator." },
      { front: "Why does dip error exist?", back: "Earth's magnetic field lines are parallel to the surface at the equator but curve increasingly downward near the poles. The needle aligns with these lines." },
      { front: "Define ACCELERATION error and when it occurs.", back: "A dip-related error caused by the pendulous mounting tilting the compass card. Occurs on EAST or WEST headings during airspeed changes. Does NOT occur on N or S headings." },
      { front: "What does ANDS stand for?", back: "Accelerate North, Decelerate South — the compass indication error on E/W headings in the Northern Hemisphere." },
      { front: "When accelerating on an east or west heading, what does the compass falsely indicate?", back: "A turn toward North." },
      { front: "When decelerating on an east or west heading, what does the compass falsely indicate?", back: "A turn toward South." },
      { front: "Are acceleration/deceleration errors reversed in the Southern Hemisphere?", back: "Yes — all magnetic dip errors are reversed in the Southern Hemisphere." },
      { front: "Define COMPASS TURNING error and when it is most pronounced.", back: "A dip error caused by banking the compass card via centrifugal force. Most pronounced when turning from NORTH or SOUTH headings. Does NOT occur when turning from E or W." },
      { front: "When turning TO a northerly heading, does the compass lag or lead?", back: "LAG — the compass indication falls behind the actual turn. You must roll out BEFORE reaching the desired heading." },
      { front: "When turning TO a southerly heading, does the compass lag or lead?", back: "LEAD — the compass indication is ahead of the actual turn. You must roll out AFTER passing the desired heading." },
      { front: "What is the rule of thumb for rolling out of a turn TO north?", back: "Stop the turn 15° PLUS half the latitude before reaching north. Example at 40°N: stop 35° (15 + 20) before north." },
      { front: "What is the rule of thumb for rolling out of a turn TO south?", back: "Stop the turn 15° PLUS half the latitude PAST south. Example at 40°N: stop 35° (15 + 20) beyond south." },
      { front: "What does UNOS stand for?", back: "Undershoot North, Overshoot South — memory aid for compass turning error rollout technique." },
      { front: "What causes compass card OSCILLATION error?", back: "Erratic movement of the compass card caused by turbulence or rough control technique." },
      { front: "Define MAGNETIC VARIATION.", back: "The angular difference between True North and Magnetic North at a given location." },
      { front: "What are ISOGONIC lines?", back: "Lines connecting points of equal magnetic variation, plotted in degrees east or west on aeronautical charts." },
      { front: "What is an AGONIC line?", back: "A line connecting points of zero magnetic variation (where magnetic and true north coincide)." },
      { front: "On a northerly heading turning east or west, what is the initial compass indication?", back: "The compass LAGS — initially indicates a turn in the OPPOSITE direction. The lag diminishes as the turn progresses toward east or west." },
      { front: "On a southerly heading turning east or west, what is the initial compass indication?", back: "The compass LEADS — shows a greater amount of turn than is actually made. Lead diminishes as turn progresses toward east or west." },
      { front: "What THREE instruments does the pitot-static system power?", back: "Altimeter, Vertical Speed Indicator (VSI), and Airspeed Indicator (ASI)." },
      { front: "What are the TWO major parts of the pitot-static system?", back: "The pitot pressure chamber and lines; the static pressure chamber and lines." },
      { front: "Where is static pressure normally sourced from?", back: "A vent or vents mounted flush with the side of the fuselage (in some airplanes, from the back of the pitot tube)." },
      { front: "Which instruments receive static pressure?", back: "All three: altimeter, VSI, and airspeed indicator." },
      { front: "What is pitot pressure also called?", back: "Ram pressure, impact pressure, or total pressure." },
      { front: "Where is the pitot tube normally located?", back: "On or beneath the leading edge of the left wing, aligned with the relative wind." },
      { front: "Which instrument uses pitot (ram) pressure?", back: "The airspeed indicator ONLY." },
      { front: "If ONLY the pitot tube is clogged, which instrument(s) are affected?", back: "Only the airspeed indicator — it becomes inoperative." },
      { front: "If ONLY the static vents are clogged (pitot clear), what happens to each instrument?", back: "Altimeter: frozen (reads altitude at blockage point). VSI: constant zero. Airspeed: continues to function but inaccurately." },
      { front: "With a static blockage, what does the ASI read above the blockage altitude? Below?", back: "ABOVE: reads LOWER than actual (trapped static is higher than ambient). BELOW: reads FASTER than actual (trapped static is lower than ambient)." },
      { front: "If both pitot and static are clogged, what happens?", back: "All three instruments (ASI, altimeter, VSI) provide inaccurate readings." },
      { front: "What is the ALTERNATE static source and what pressure does it provide?", back: "A manually-selected valve vented to the inside of the airplane. It provides LOWER pressure than the normal source (due to venturi effect around the fuselage)." },
      { front: "When using the alternate static source, how do instruments change?", back: "Altimeter reads HIGHER than actual. VSI initially shows a CLIMB then returns to zero. ASI reads FASTER than actual." },
      { front: "What features help prevent pitot tube blockage?", back: "An electric heating element (pitot heat) to prevent ice, and a drain opening to remove water." },
      { front: "How does the ASI measure airspeed?", back: "It is a differential pressure instrument measuring the difference between total pressure (pitot) and static pressure — called dynamic pressure." },
      { front: "What is DYNAMIC PRESSURE?", back: "The difference between total (pitot) pressure and static pressure; what the ASI actually measures." },
      { front: "What is the WHITE arc on the ASI?", back: "The flap operating range. Lower limit = VS0, upper limit = VFE." },
      { front: "Define VS0.", back: "Power-off stalling speed (or minimum steady flight speed) in the LANDING configuration (flaps and gear down) at maximum landing weight." },
      { front: "Define VFE.", back: "Maximum speed with flaps fully extended. Exceeding it risks severe structural strain or failure." },
      { front: "What is the GREEN arc on the ASI?", back: "Normal operating range. Lower limit = VS1, upper limit = VNO." },
      { front: "Define VS1.", back: "Power-off stalling speed in a specified configuration — normally flaps and gear retracted, at maximum takeoff weight." },
      { front: "Define VNO.", back: "Maximum structural cruising speed (top of green arc). Should not be exceeded except in smooth air, and then only with caution." },
      { front: "What is the YELLOW arc on the ASI?", back: "Caution range. Lower limit = VNO, upper limit = VNE. Fly here only in smooth air with caution." },
      { front: "What is the RED radial line on the ASI?", back: "VNE — the never-exceed speed. Operating above it risks structural damage or failure." },
      { front: "Define VA (Design Maneuvering Speed) and what it allows.", back: "The speed below which a single full control deflection in one axis will not damage the aircraft. Fly at or below VA in rough air or severe turbulence. VA varies with gross weight." },
      { front: "Does VA protect against multiple simultaneous full control inputs?", back: "NO. VA only protects against one full input in one axis at a time. Multiple inputs or full inputs in more than one axis can still cause structural damage." },
      { front: "Define VX.", back: "Best angle of climb speed — most altitude gained per unit of DISTANCE. Used to clear obstacles on short-field takeoff." },
      { front: "Define VY.", back: "Best rate of climb speed — most altitude gained per unit of TIME." },
      { front: "Define VG.", back: "Best glide speed — provides best L/D ratio in power-off glide; allows the airplane to glide farthest." },
      { front: "Define VR.", back: "Rotation speed." },
      { front: "Define VLE and VLO.", back: "VLE = maximum speed with landing gear EXTENDED. VLO = maximum speed for EXTENDING or RETRACTING the landing gear." },
      { front: "Define VH.", back: "Maximum continuous power speed." },
      { front: "Define INDICATED AIRSPEED (IAS).", back: "The direct reading from the ASI, uncorrected for air density, installation, or instrument errors. Used for POH/AFM limits, FARs, and ATC speed limits." },
      { front: "Define CALIBRATED AIRSPEED (CAS).", back: "IAS corrected for installation (position) error and instrument error." },
      { front: "What causes installation (position) error in the ASI?", back: "Slipstream disturbances at the static port(s) that prevent true static pressure measurement, and the pitot tube not always pointing directly into the relative wind at varying angles of attack." },
      { front: "Define TRUE AIRSPEED (TAS).", back: "CAS corrected for density altitude — the airplane's actual speed through the air." },
      { front: "As altitude increases, how does IAS relate to TAS for a given TAS?", back: "IAS DECREASES as altitude increases for a given TAS (less dense air = less dynamic pressure)." },
      { front: "Quick approximation rule for TAS from IAS?", back: "Add 2% to IAS for each 1,000 ft. of altitude. Example: IAS 140 kt at 6,000 ft → TAS ≈ 156.8 kt." },
      { front: "What principle does the pressure altimeter use to measure altitude?", back: "It is an aneroid barometer — it measures atmospheric pressure at the altimeter's location and converts it to altitude in feet." },
      { front: "What is the basic component of the altimeter?", back: "The aneroid wafer. A stack expands/contracts with pressure changes and drives the altitude pointers via gears." },
      { front: "On a 3-pointer altimeter, which pointer is shortest/medium/longest and what does each indicate?", back: "Short (10,000 ft increments), medium (1,000 ft increments), long (100 ft increments)." },
      { front: "What is the Kollsman window?", back: "The window on the altimeter face where the barometric altimeter setting (in. Hg) is displayed and adjusted." },
      { front: "What are ISA sea-level standard values?", back: "15°C (59°F) temperature and 29.92 in. Hg pressure." },
      { front: "What is the rate of altitude change per inch of pressure change on the altimeter?", back: "Approximately 1,000 ft. per 1 in. Hg. (e.g., changing from 29.15 to 29.85 = 0.70 in. = ~700 ft. change)." },
      { front: "Increasing the altimeter setting (higher pressure) does what to indicated altitude?", back: "INCREASES the indicated altitude." },
      { front: "Define ABSOLUTE altitude.", back: "The vertical distance of the aircraft above the terrain — expressed in feet AGL (Above Ground Level)." },
      { front: "Define TRUE altitude.", back: "The actual vertical distance above mean sea level (MSL). Not affected by atmospheric conditions. Used for chart elevations." },
      { front: "Define INDICATED altitude.", back: "The altitude read directly from the altimeter after setting the local altimeter setting. Approximates true altitude; exact only when conditions match ISA standard." },
      { front: "Define PRESSURE altitude.", back: "The indicated altitude when the altimeter is set to 29.92 in. Hg. Height above the standard datum plane." },
      { front: "When are pressure altitude and true altitude the same?", back: "When standard atmospheric conditions exist (29.92 in. Hg and 15°C at sea level)." },
      { front: "Define DENSITY altitude.", back: "Pressure altitude corrected for nonstandard temperature. Directly affects airplane performance." },
      { front: "If temperature is ABOVE standard, is density altitude higher or lower than pressure altitude?", back: "HIGHER than pressure altitude." },
      { front: "If temperature is BELOW standard, how does density altitude compare to pressure altitude?", back: "LOWER than pressure altitude." },
      { front: "When are pressure altitude and density altitude identical?", back: "When the temperature is standard (15°C at sea level)." },
      { front: "What are flight levels (FL), and when are they used?", back: "Altitudes at and above 18,000 ft. MSL where altimeters are set to 29.92. FL is the altitude with last two zeros removed (19,000 ft = FL 190)." },
      { front: "What are the FAR altimeter setting requirements below 18,000 ft. MSL?", back: "Use the current reported altimeter setting of a station along the route and within 100 NM of the aircraft. Update as flight progresses." },
      { front: "What altimeter setting is required at or above 18,000 ft. MSL?", back: "29.92 in. Hg." },
      { front: "Over high mountainous terrain, by how much might the altimeter over-read actual altitude?", back: "1,000 ft. or more — generous altitude margins and awareness of downdrafts are required." },
      { front: "Flying from HIGH pressure to LOW pressure without adjusting the altimeter — are you higher or lower than indicated?", back: "LOWER than indicated (actual altitude is below what the altimeter shows). Memory: 'From high to low, look out below.'" },
      { front: "Flying from LOW pressure to HIGH pressure without adjusting — are you higher or lower than indicated?", back: "HIGHER than indicated. Memory: 'Low to high, clear the sky.'" },
      { front: "Flying in COLDER than standard temperature air at a constant indicated altitude — are you higher or lower than indicated?", back: "LOWER than indicated (actual altitude is below the altimeter reading). Memory: 'From high to low [temperature], look out below.'" },
      { front: "On a WARM day, does the altimeter over-read or under-read actual altitude?", back: "Under-reads — the altimeter indicates LOWER than actual altitude (pressure levels are higher on warm days)." },
      { front: "Can the pilot adjust the altimeter for temperature error?", back: "NO — the pilot can only adjust for pressure (barometric) changes, not temperature errors." },
      { front: "In cold temperatures near mountains, what should a pilot do about indicated cruising altitude?", back: "Use a HIGHER indicated altitude than normally needed to ensure actual terrain clearance." },
      { front: "What are the TWO fundamental properties of gyroscopic action?", back: "(1) Rigidity in space — spinning gyro resists changes to its plane of rotation. (2) Precession — a deflective force applied to a spinning gyro results in movement 90° ahead in the direction of rotation." },
      { front: "Which gyroscopic instruments use RIGIDITY IN SPACE?", back: "Attitude Indicator (AI) and Heading Indicator (HI)." },
      { front: "Which gyroscopic instrument uses PRECESSION?", back: "The Turn Coordinator (TC) / Turn-and-Slip Indicator (T&SI)." },
      { front: "In most light airplanes, what powers the heading and attitude indicators? The turn indicator?", back: "Heading and attitude indicators: vacuum (suction) system. Turn indicator: electrical system." },
      { front: "What are TWO important design characteristics of an instrument gyro?", back: "(1) Great weight or high density for size. (2) Rotation at high speeds with low-friction bearings." },
      { front: "What are gimbals?", back: "The mountings for gyro wheels — may be circular rings, rectangular frames, or part of the instrument case." },
      { front: "Describe the Attitude Indicator (AI) operation.", back: "The gyro is mounted on a horizontal plane and uses rigidity in space. The horizon bar is fixed to the gyro and stays horizontal as the airplane pitches and banks." },
      { front: "At what pitch and bank limits can the AI tumble or 'spill'?", back: "Typically bank limits 100°–110°, pitch limits 60°–70°." },
      { front: "What does 'PULL TO CAGE' do on the AI?", back: "Locking (turning): locks gimbal bearings, prevents the AI from maintaining the artificial horizon — used during unusual attitudes to prevent damage. Pulling out: erects the gyro, counters precession error, or resets during straight-and-level flight." },
      { front: "After pulling the AI out of cage, what attitude does it display?", back: "Wings level, nose on the horizon." },
      { front: "Describe the Turn Coordinator (TC).", back: "Contains a miniature airplane (gyro-operated, shows rate of turn) and an inclinometer (ball, shows coordination). The gyro's gimbal axis is tilted ~30° to sense both roll (longitudinal) and yaw (vertical) axes." },
      { front: "What does the TC NOT directly indicate?", back: "It does NOT give a direct indication of the banked ATTITUDE of the airplane (only rate of roll/yaw)." },
      { front: "What is a standard-rate turn, and how long does 360° take?", back: "3° per second. 360° requires 2 minutes." },
      { front: "In the TC, when the needle aligns with the small side marks, what is indicated?", back: "A standard-rate turn (3° per second)." },
      { front: "What does the BALL (inclinometer) in the TC indicate?", back: "Whether the turn is coordinated (ball centered = coordinated; ball inside = slip; ball outside = skid)." },
      { front: "What is a SKID?", back: "Rate of turn too great for the angle of bank. Excessive centrifugal force moves the ball to the OUTSIDE of the turn. Caused by too much rudder." },
      { front: "What is a SLIP?", back: "Rate of turn too slow for the angle of bank. Insufficient centrifugal force moves the ball to the INSIDE of the turn. Caused by too little rudder." },
      { front: "How do you correct a skid or slip?", back: "'Step on the ball' — apply rudder pressure toward the side where the ball is displaced." },
      { front: "How is a SKID corrected?", back: "Increase bank, reduce rudder force, or both." },
      { front: "How is a SLIP corrected?", back: "Decrease bank, increase rudder pressure, or both." },
      { front: "How does the Turn-and-Slip Indicator (T&SI) differ from the Turn Coordinator?", back: "T&SI uses a needle (not a miniature airplane) and senses movement only around the VERTICAL (yaw) axis — cannot detect roll. Older instrument." },
      { front: "Describe the Heading Indicator (HI) operation.", back: "Uses rigidity in space. Rotor turns in a vertical plane with compass card fixed to it. As the airplane turns, the card stays fixed in space, giving clear heading information." },
      { front: "Why must the HI be periodically realigned with the magnetic compass?", back: "Gyroscopic precession (mainly from bearing friction or improper vacuum) causes the HI to drift/creep from its set heading. Must be realigned every ~15 minutes." },
      { front: "At what pitch/bank limits can the HI tumble or spill?", back: "Approximately 55° of pitch and 55° of bank." },
      { front: "How does the vacuum system spin gyro rotors?", back: "A vacuum pump draws air against the rotor vanes, spinning them at high speed — similar to a water wheel. A suction gauge shows system vacuum." },
      { front: "What does a low-vacuum warning light indicate?", back: "Airflow is insufficient to spin gyros fast enough — expect erroneous readings from vacuum-driven instruments. Check suction gauge." },
      { front: "What does EFIS stand for, and how is it defined by the FAA?", back: "Electronic Flight Instrument System. The FAA defines it as any flight instrument display using LCD (liquid crystal display) technology." },
      { front: "What is a PFD?", back: "Primary Flight Display — integrates all flight instruments critical to safe flight on ONE screen (attitude, airspeed, altitude, heading, VSI, slip/skid, navigation)." },
      { front: "On a PFD, where is the airspeed tape typically located? Altitude tape?", back: "Airspeed: LEFT side. Altitude: RIGHT side." },
      { front: "What is the airspeed 'trend vector' on a PFD?", back: "An indication of the speed the airplane will attain in the next 10 seconds if attitude, power, and configuration remain unchanged." },
      { front: "What is an MFD?", back: "Multi-Function Display — combines information from multiple systems (moving map, weather radar, engine data, traffic, terrain, checklists) on one screen." },
      { front: "What warning applies to the moving map on an MFD?", back: "A moving map should be a SUPPLEMENT, not a substitute, in the navigational process." },
      { front: "What is the ADC and what does it do?", back: "Air Data Computer — receives pitot and static inputs, computes dynamic pressure, and generates airspeed, altitude, and VSI for the PFD." },
      { front: "What is the AHRS, and what advantage does it have over mechanical gyros?", back: "Attitude and Heading Reference System — uses solid-state laser systems instead of free-spinning gyros. Capable of flight at any attitude without tumbling." },
      { front: "In a typical EFIS installation, what happens if one screen fails?", back: "Any remaining screen can perform any of the functions of the failed screen. Backup instrumentation is also provided for total PFD failure." },
      { front: "How does an EFIS derive heading information?", back: "From a magnetometer that senses Earth's lines of magnetic flux." },
      { front: "What are the FOUR basic functions of engine oil?", back: "(1) Lubricate — film between moving surfaces. (2) Seal — between cylinder walls and pistons. (3) Clean — carries off metal particles and contaminants. (4) Cool — carries heat away from engine parts." },
      { front: "Which oil function is MOST important according to the study guide?", back: "Cooling — especially important on long summer cross-country flights." },
      { front: "What are FIVE causes of excessive engine oil/cylinder head temperature?", back: "(1) Too much power. (2) Climbing too steeply (too low airspeed) in hot weather. (3) Fuel with lower-than-specified octane. (4) Mixture too lean. (5) Oil level too low." },
      { front: "What does excessively high engine temperature cause?", back: "Loss of power, excessive oil consumption, excessive internal wear, and detonation." },
      { front: "What does the oil temperature gauge give as a warning?", back: "Only an INDIRECT and DELAYED indication of rising engine temperature." },
      { front: "What does the CHT gauge give compared to the oil temperature gauge?", back: "A DIRECT and IMMEDIATE indication of engine temperature change." },
      { front: "What are four ways to reduce excessive CHT?", back: "(1) Open cowl flaps. (2) Increase airspeed. (3) Enrich mixture. (4) Reduce power." },
      { front: "What are COWL FLAPS and what do they do?", back: "Hinged covers over the hot air exhaust opening(s). Opening them increases cooling airflow and DECREASES engine temperature; closing them INCREASES temperature." },
      { front: "During what operations are cowl flaps typically OPEN? CLOSED?", back: "Open: low-airspeed/high-power (takeoff, climb). Closed: high-airspeed/low-power (cruise, descent)." },
      { front: "What does LOW oil pressure necessitate?", back: "An immediate landing." },
      { front: "What color coding does the oil pressure gauge use?", back: "Green arc for normal operating range; red lines at each end for high/low pressure limits." },
      { front: "What is a constant-speed (controllable-pitch) propeller's advantage?", back: "It allows the pilot to select the most efficient blade angle for any given flight condition." },
      { front: "Why is a propeller blade twisted?", back: "Outer parts of the blade travel faster than portions near the hub. Twisting maintains a relatively constant angle of attack along the blade's length during cruise." },
      { front: "In a constant-speed prop airplane, what does the THROTTLE control?", back: "Power output — registered on the MANIFOLD PRESSURE gauge." },
      { front: "In a constant-speed prop airplane, what does the PROPELLER control regulate?", back: "Engine RPM — registered on the TACHOMETER." },
      { front: "What critical limitation applies to manifold pressure and RPM?", back: "High manifold pressure must NOT be used with low RPM settings — risks overstressing cylinders." },
      { front: "How does the constant-speed propeller governor work?", back: "It regulates oil flow into and out of the propeller hub to change blade pitch angle, maintaining a constant pilot-set RPM regardless of airspeed or power changes." },
      { front: "For TAKEOFF in a constant-speed prop airplane, what pitch/RPM setting is used?", back: "Low pitch, high RPM — reduces propeller drag and allows maximum power." },
      { front: "For CRUISE in a constant-speed prop airplane, what pitch setting is used?", back: "High pitch (higher blade angle) — blade takes a larger bite of air at lower power, increasing propeller efficiency." },
      { front: "Define PROPELLER SLIP.", back: "The difference between geometric pitch (theoretical advance per revolution in a solid medium) and effective pitch (actual distance moved forward per revolution through air)." },
      { front: "At what angle of attack is a propeller most efficient (least slippage)?", back: "1° to 4°." },
      { front: "What is the range of propeller efficiency?", back: "50% to 87%, depending on slippage." },
      { front: "What does the MANIFOLD PRESSURE gauge measure?", back: "Air pressure in the engine intake manifold, in inches of mercury (in. Hg). Higher MP = more power." },
      { front: "In a fixed-pitch prop airplane, what controls RPM?", back: "The throttle — which directly controls engine power output. RPM is read on the tachometer." },
      { front: "What is the difference between geometric pitch and effective pitch?", back: "Geometric pitch assumes no slippage (theoretical). Effective pitch accounts for actual slippage through air." },
      { front: "What is the function of the ignition system?", back: "To provide an electrical spark to ignite the fuel/air mixture in the cylinders." },
      { front: "Is the ignition system connected to the airplane's electrical system?", back: "NO — the magneto ignition system is completely SEPARATE from the airplane's electrical system." },
      { front: "What is a magneto?", back: "A self-contained, engine-driven unit using a rotating magnet in a coil to produce electrical current — completely independent of the airplane's battery/alternator." },
      { front: "After the engine starts, does the battery power the ignition?", back: "NO — once running, the magnetos are self-sustaining (engine-driven). The battery/starter system is disengaged." },
      { front: "What are the FIVE ignition switch positions and what does each do?", back: "OFF (magnetos grounded), R (right magneto only), L (left magneto only), BOTH (both magnetos), START (activates electric starter)." },
      { front: "In the BOTH position, how many spark plugs per cylinder are firing?", back: "Two — one from each magneto." },
      { front: "In the OFF position, why might the magneto still fire?", back: "If the ground wire is broken or disconnected, the magneto can supply current to spark plugs even with the switch OFF." },
      { front: "If the magneto fires with switch OFF (broken ground), how do you stop the engine?", back: "Move the mixture lever to the IDLE CUT-OFF position, then have the system checked by an aviation maintenance technician." },
      { front: "What is the purpose of the DUAL ignition system?", back: "(1) Improved engine performance — more complete/even combustion from both sides of the combustion chamber. (2) Increased safety — redundancy if one magneto fails." },
      { front: "Can the engine fire with the master switch OFF if ignition is on BOTH or L/R?", back: "YES — if the propeller is moved from outside the airplane, the magneto (mechanical, not electrical) can fire the engine." },
      { front: "What is a FUEL INJECTION system?", back: "Fuel is forced under high pressure directly into (or just prior to) the cylinders by injection pumps, where it mixes with air. No carburetor required." },
      { front: "What is a GRAVITY-FEED fuel system?", back: "Gravity moves fuel from tanks (positioned above the carburetor) to the engine. Typically used in high-wing aircraft." },
      { front: "Why do low-wing aircraft generally need a fuel pump?", back: "Their fuel tanks are below the carburetor, so gravity cannot feed fuel upward — a pump is required." },
      { front: "What are the positions of the fuel selector valve?", back: "Left, Right, Both, and Off." },
      { front: "What is carburetor icing, and why is it dangerous?", back: "Ice formation inside the carburetor passages that restricts airflow, reduces power, and can cause complete engine failure." },
      { front: "What are the THREE types of induction system icing?", back: "(1) Impact ice — moisture freezes on induction components. (2) Throttle ice — forms at/near partially closed throttle. (3) Fuel vaporization ice (carburetor icing) — fuel vaporization + pressure drop causes sudden cooling." },
      { front: "What is IMPACT ICE and what unique feature does it have?", back: "Freezing of moisture on induction system components. It can affect BOTH carbureted AND fuel-injected engines. Forms most rapidly around -4°C (25°F)." },
      { front: "What is FUEL VAPORIZATION (carburetor) icing?", back: "The most common type — occurs in float-type carburetors. Fuel vaporization + venturi pressure drop cools air up to 15°C in a fraction of a second, freezing moisture inside the carburetor. NOT a problem in fuel injection systems." },
      { front: "What temperature/humidity conditions are MOST conducive to carburetor icing?", back: "Temperatures below 21°C (70°F) with relative humidity above 80%. But icing can occur up to 38°C (100°F) with humidity as low as 50%." },
      { front: "Can carburetor icing occur on a dry day or well below freezing?", back: "Generally NOT — not enough moisture in the air. Low humidity or extreme cold usually prevents it." },
      { front: "How does LOW POWER setting increase carburetor icing risk?", back: "Lower engine temperatures reduce engine and engine bay heat, leading to rapid and often undetected carburetor icing — typically discovered when power is reapplied (e.g., leveling from descent)." },
      { front: "First indication of carburetor icing in a FIXED-PITCH propeller airplane?", back: "Loss of RPM." },
      { front: "First indication of carburetor icing in a CONSTANT-SPEED propeller airplane?", back: "Drop in manifold pressure (RPM stays constant because propeller pitch auto-adjusts)." },
      { front: "When carburetor heat is applied to a fixed-pitch prop with ice, what happens to RPM?", back: "First DECREASES (less dense hot air reduces power), then GRADUALLY INCREASES as ice melts." },
      { front: "How does carburetor heat work?", back: "It preheats air before the carburetor by routing it through a heater muff around the exhaust, bypassing the air filter. The warmer, less dense air raises the fuel/air mixture temperature above freezing." },
      { front: "Does carburetor heat use filtered or unfiltered air?", back: "UNFILTERED air from inside the engine cowling. This is warmer but can affect mixture ratio and engine performance." },
      { front: "Does applying carburetor heat increase or decrease engine performance?", back: "DECREASES — warmer, less dense air enrichens the mixture and reduces power output." },
      { front: "If icing is detected, how should carburetor heat be applied?", back: "FULL heat immediately. Keep it on until certain all ice is removed. Partial or insufficient heat can AGGRAVATE the condition by putting induction air in the ice-prone temperature range." },
      { front: "When should carburetor heat NOT be used?", back: "During full-power operations (takeoff) and during normal engine operation (use only to check for/remove carburetor ice)." },
      { front: "During closed-throttle operations with suspected icing, when should carb heat be applied?", back: "Apply FULL carb heat BEFORE closing the throttle, and leave it on throughout closed-throttle operation." },
      { front: "What does the Carburetor Air Temperature gauge yellow arc indicate?", back: "Range of -15°C to +5°C — the temperature range in which carburetor icing may occur." },
      { front: "Under what condition may PARTIAL carburetor heat be used?", back: "ONLY in airplanes equipped with a carburetor air temperature gauge — so the pilot can keep the carburetor air temperature out of the icing range." },
      { front: "What is the OAT gauge used for?", back: "Measuring outside/ambient air temperature (calibrated in °C and °F) for calculating TAS and detecting potential icing conditions." },
      { front: "What is the optimal fuel/air ratio for maximum power?", back: "Approximately 1 part fuel to 12 parts air by weight." },
      { front: "What is the effect of a RICH mixture?", back: "Excessive fuel consumption, rough engine operation, loss of power, below-normal cylinder temperatures, and spark plug fouling." },
      { front: "What is the effect of an excessively LEAN mixture?", back: "Rough engine operation, detonation, overheating, and loss of power." },
      { front: "As altitude increases, what must be done to the mixture and why?", back: "LEANED — air density decreases at altitude, so less fuel is needed to maintain the proper fuel/air ratio." },
      { front: "If descending from high altitude without enriching the mixture, what happens?", back: "The mixture becomes excessively lean as denser air is encountered at lower altitudes." },
      { front: "At a high-altitude airport with rough engine, what might fix it?", back: "LEANING the mixture. A too-rich mixture at high altitude can cause roughness; applying carb heat (which also enrichens) worsens it — the engine running rougher on carb heat confirms an already-rich mixture." },
      { front: "What is the EGT gauge and how is it used for leaning?", back: "Exhaust Gas Temperature gauge. Lean slowly until EGT peaks, then enrich until EGT drops by the recommended amount (~25°–75°). Can reduce fuel consumption by ~10%." },
      { front: "How are carbureted engines calibrated at sea level regarding the mixture?", back: "For correct fuel metering with mixture in FULL RICH. As altitude increases, mixture must be manually leaned." },
      { front: "Define fuel/air ratio.", back: "The ratio between the WEIGHT of fuel and the WEIGHT of air entering the cylinders." },
      { front: "What is DETONATION?", back: "The fuel/air mixture EXPLODES instead of burning evenly — caused by lower-than-specified octane fuel or excessive engine temperature." },
      { front: "How does normal combustion differ from detonation?", back: "Normal: fuel burns smoothly from spark plug outward, exerting smooth pressure on the piston. Detonation: an explosion that creates extreme heat and stress on engine parts." },
      { front: "What is PRE-IGNITION?", back: "Uncontrolled firing of the fuel/air charge BEFORE normal spark ignition. Detonation often produces heat that progresses into pre-ignition." },
      { front: "If detonation is suspected during climb-out (fixed-pitch prop), what should you do?", back: "Lower the nose slightly — increases cooling airflow and decreases the engine's workload." },
      { front: "What does 100LL mean in aviation fuel?", back: "100 = octane rating (anti-knock quality). LL = Low Lead." },
      { front: "What color is 100LL fuel?", back: "BLUE." },
      { front: "What colors are the other common aviation fuels?", back: "100 AVGAS = Green. 80 AVGAS = Red. Jet A = Colorless or straw." },
      { front: "If aviation fuel grades are accidentally mixed, what color do they turn?", back: "Straw-colored." },
      { front: "Is it better to use a higher or lower octane than specified?", back: "HIGHER — prevents detonation or running the engine too hot. Lower can cause detonation." },
      { front: "Why should fuel tanks be filled at the END of the day?", back: "To prevent moisture condensation by eliminating airspace (and thus humid air) in the tanks." },
      { front: "What should be drained before EACH flight regarding fuel?", back: "All fuel strainer drains and fuel tank sumps — to check for water contamination." },
      { front: "What static electricity precautions apply during refueling?", back: "(1) Attach ground wire to airplane before removing fuel cap. (2) Ground refueling nozzle to airplane before and during refueling. (3) Ground fuel truck to airplane and to ground." },
      { front: "When performing a cold weather engine start by pulling the propeller through by hand, what MUST be verified first?", back: "Ignition/magneto switch OFF, throttle closed, mixture in lean/idle cut-off, nobody near propeller arc, parking brake on, airplane chocked/tied down." },
      { front: "After the engine starts, what should be immediately checked?", back: "Oil pressure gauge (and other engine instruments)." },
      { front: "When is engine preheat generally REQUIRED? RECOMMENDED?", back: "Required: below 0°F (-18°C). Recommended by most manufacturers: below 20°F (-7°C)." },
      { front: "After a cold engine starts, how long should it idle at low RPM?", back: "2 to 5 minutes — to allow oil to warm and circulate." },
      { front: "What causes a FLOODED engine and how is it started?", back: "Overpriming (too much fuel in cylinders). Procedure: mixture in LEAN position, throttle FULL OPEN." },
      { front: "What might cold weather do to the crankcase breather lines?", back: "They may become clogged with ice as crankcase vapor condenses and freezes." },
      { front: "What is a 'read and do' vs. 'do and read' checklist?", back: "Read and do: perform each item as you read it (normal ops, e.g., before takeoff). Do and read: act first from memory, then verify against checklist (emergencies)." },
      { front: "What voltage systems are common in light airplanes?", back: "12-volt battery / 14-volt DC system (most common). Also 24-volt battery / 28-volt DC for heavier equipment needs." },
      { front: "What are the basic components of an airplane electrical system?", back: "Alternator or generator, battery, master switch, bus bar, fuses/circuit breakers, voltage regulator, ammeter, and wiring." },
      { front: "Why must alternator output voltage be slightly HIGHER than battery voltage?", back: "To maintain a positive charge on the battery. Example: 14-volt alternator keeps a 12-volt battery charged." },
      { front: "What does the master switch turn on/off? What does it NOT control?", back: "Turns electrical system on/off for all equipment EXCEPT the ignition system (which runs from magnetos, not the electrical system)." },
      { front: "What is an ALTERNATOR switch?", back: "Allows the pilot to disconnect the alternator from the electrical system (e.g., alternator failure). All load then goes to battery — turn off nonessential equipment." },
      { front: "What does a CENTER-ZERO ammeter show?", back: "Positive reading = battery being charged. Negative reading = more current drawn from battery than replaced (overload or defective alternator)." },
      { front: "What does a LOADMETER show?", back: "The amount of current coming FROM the alternator. Zero reading with equipment in use = alternator failure; current being drawn from battery." },
      { front: "What is a BUS BAR?", back: "A common terminal that connects the main electrical system to the equipment using electricity, simplifying wiring and distributing voltage from a common point." },
      { front: "Difference between a FUSE and a CIRCUIT BREAKER?", back: "Fuse: must be REPLACED when blown. Circuit breaker: can be manually RESET by pushing it in. If a CB pops again after reset, do not reset again — risk of fire from a short circuit." },
      { front: "What equipment in a typical light airplane uses the ELECTRICAL system?", back: "Starter motor, interior/exterior lights, flaps, radios/navigation equipment, turn coordinator gyro, fuel gauges, stall warning, pitot heat, clock, retractable gear." },
      { front: "What DOES NOT use the electrical system?", back: "The magneto ignition system — it is entirely self-contained and engine-driven." },
      { front: "Why should you NOT start an engine with a GPU when the battery is dead?", back: "Electrical energy will be forced into the dead battery, causing it to overheat and possibly EXPLODE, damaging the airplane." },
      { front: "During low RPM operations, where must electrical power come from?", back: "The BATTERY — the alternator may not produce enough current at low RPM, causing the battery to deplete." },
      { front: "What is a POSITIVE ammeter indication after startup that then decreases?", back: "Normal — battery briefly discharges during starting (negative or large positive), then alternator takes over and recharges battery (positive reading decreases to steady charge level)." },
      { front: "What does an over-voltage relay do?", back: "Trips the alternator offline if a safe voltage limit is exceeded, shown as a negative reading on the ammeter." },
    ],
    quiz: [
      {
        q: "The magnetic compass is described as:",
        opts: ["The most accurate direction-finding instrument in the airplane", "The only SELF-CONTAINED direction-seeking instrument in the airplane", "Powered by the aircraft electrical system", "Used only as a backup to the GPS"],
        ans: 1,
        exp: "The magnetic compass is the only self-contained direction-seeking instrument — no electrical or vacuum power required. Primarily used to set/verify the heading indicator."
      },
      {
        q: "Compass deviation is recorded on the:",
        opts: ["Sectional chart", "Compass correction card mounted near the compass", "POH/AFM equipment list", "ATIS broadcast"],
        ans: 1,
        exp: "Remaining deviation errors after compass swinging are recorded on a compass correction card in the airplane near the magnetic compass."
      },
      {
        q: "Magnetic dip error is:",
        opts: ["Greatest at the magnetic equator", "Zero at the magnetic equator and greatest at the magnetic poles", "Caused by the aircraft's electrical system", "Eliminated by liquid in the compass"],
        ans: 1,
        exp: "Magnetic dip is the tendency of compass needles to point downward as well as toward the pole. The Earth's lines of force are horizontal at the equator (zero dip) and curve downward near the poles (greatest dip)."
      },
      {
        q: "ANDS (acceleration/deceleration error) memory aid stands for:",
        opts: ["Always North, Decelerate South", "Accelerate North, Decelerate South", "Above North, Decelerate South", "All North/South Deflections (any heading)"],
        ans: 1,
        exp: "ANDS: Accelerate → compass indicates turn toward NORTH. Decelerate → compass indicates turn toward SOUTH. Error occurs only on EAST or WEST headings, not on N/S."
      },
      {
        q: "When TURNING TO a northerly heading at 40° N latitude, the pilot should roll out:",
        opts: ["Exactly at the desired heading", "Approximately 35° BEFORE reaching the desired heading (UNOS — Undershoot North)", "Approximately 35° AFTER reaching the desired heading", "When the heading indicator and compass agree"],
        ans: 1,
        exp: "Compass LAGS turning to north. Rule of thumb: stop turn 15° + half latitude EARLY. At 40° latitude: 15 + 20 = 35° early. UNOS = Undershoot North."
      },
      {
        q: "Isogonic lines on aeronautical charts indicate:",
        opts: ["Lines of equal magnetic dip", "Lines connecting points of EQUAL magnetic variation", "Lines of zero magnetic variation only", "Lines of zero compass deviation"],
        ans: 1,
        exp: "Isogonic lines connect points of equal magnetic variation. The AGONIC line connects points of ZERO variation (where true north and magnetic north align)."
      },
      {
        q: "Which instruments use the pitot-static system?",
        opts: ["Attitude indicator, heading indicator, turn coordinator", "Airspeed indicator, altimeter, vertical speed indicator", "Airspeed indicator, altimeter, attitude indicator", "Altimeter, turn coordinator, vertical speed indicator"],
        ans: 1,
        exp: "Pitot-static powers: ASI (pitot + static), Altimeter (static only), VSI (static only). The pitot tube provides ram pressure for the ASI ONLY."
      },
      {
        q: "If the pitot tube becomes blocked but the static port remains open, the ASI will:",
        opts: ["Read zero immediately", "Continue to function but inaccurately — freezing or drifting with altitude changes", "Show maximum airspeed", "Continue reading correctly"],
        ans: 1,
        exp: "The trapped pitot pressure doesn't change. As altitude varies, the ASI may drift but essentially freezes at the indication when the blockage occurred."
      },
      {
        q: "If the STATIC SYSTEM is blocked with pitot tube clear, the ASI will read:",
        opts: ["Lower than actual when ABOVE the altitude where blockage occurred", "Higher than actual when below the altitude where blockage occurred", "Both A and B", "Correctly at all altitudes"],
        ans: 2,
        exp: "Blocked static traps a pressure. Above blockage altitude: trapped static higher than ambient → ASI reads LOW. Below blockage altitude: trapped static lower than ambient → ASI reads HIGH."
      },
      {
        q: "When using the ALTERNATE STATIC SOURCE in flight, the altimeter will typically:",
        opts: ["Read LOWER than actual altitude", "Read HIGHER than actual altitude", "Be unaffected", "Read zero"],
        ans: 1,
        exp: "Alternate static source typically vents to cabin air, which has slightly lower pressure than outside due to venturi effect. Lower static = altimeter reads HIGHER than actual. Also: ASI reads faster; VSI briefly indicates climb."
      },
      {
        q: "The LOWER limit of the WHITE ARC on the ASI represents:",
        opts: ["Maximum flap extended speed (VFE)", "Power-off stall speed in landing configuration (VS0)", "Maximum structural cruising speed (VNO)", "Never-exceed speed (VNE)"],
        ans: 1,
        exp: "White arc = flap operating range. Lower limit = VS0 (stall in landing config); upper limit = VFE (max flap extended)."
      },
      {
        q: "The UPPER limit of the GREEN ARC corresponds to:",
        opts: ["VNE — never-exceed speed", "VNO — maximum structural cruising speed", "VFE — maximum flap extended speed", "VA — maneuvering speed"],
        ans: 1,
        exp: "Green arc = normal operating range. Lower limit = VS1; upper limit = VNO. The yellow arc (caution) goes from VNO to VNE (red line)."
      },
      {
        q: "Design maneuvering speed (VA) is the speed:",
        opts: ["Above which structural damage from gusts is impossible", "Below which a single full deflection of one control in smooth air will not damage the aircraft", "At which the airplane achieves maximum range", "Above which the landing gear must be retracted"],
        ans: 1,
        exp: "At or below VA, a single full control deflection on one axis in smooth air will not damage the airplane. Used in turbulence. Note: NOT marked on the ASI; varies with weight."
      },
      {
        q: "Best ANGLE-of-climb speed is denoted as:",
        opts: ["VX", "VY", "VG", "VLE"],
        ans: 0,
        exp: "VX = best ANGLE of climb (max altitude per DISTANCE — short-field obstacle takeoff). VY = best RATE of climb (max altitude per TIME — fastest climb)."
      },
      {
        q: "Best GLIDE speed (best L/D) is denoted as:",
        opts: ["VLO", "VR", "VG", "VS1"],
        ans: 2,
        exp: "VG = best glide speed. Provides the L/D MAX angle of attack in a power-off glide for the greatest glide range."
      },
      {
        q: "True airspeed (TAS) compared to indicated airspeed (IAS) at altitude:",
        opts: ["IAS > TAS at altitude", "TAS > IAS at altitude (approximately 2% per 1,000 ft)", "TAS = IAS at all altitudes", "Independent of altitude"],
        ans: 1,
        exp: "Air is less dense at altitude, so for a given IAS the airplane moves faster (TAS). Rule of thumb: add about 2% per 1,000 ft of altitude."
      },
      {
        q: "ISA standard sea-level temperature and pressure:",
        opts: ["0°C and 30.00 in. Hg", "15°C and 29.92 in. Hg", "20°C and 1,000 hPa", "10°C and 29.50 in. Hg"],
        ans: 1,
        exp: "International Standard Atmosphere (ISA): 15°C (59°F) and 29.92\" Hg (1,013.2 hPa) at sea level."
      },
      {
        q: "Pressure altitude is the indicated altitude when the altimeter is set to:",
        opts: ["Local QNH", "29.92 inches of mercury", "The departure airport elevation", "The current temperature in degrees Celsius"],
        ans: 1,
        exp: "Pressure altitude is the height above the standard datum plane (29.92\" Hg). It equals true altitude under standard conditions; used for performance calculations and at/above FL180."
      },
      {
        q: "When operating above 18,000 ft MSL, the altimeter is set to:",
        opts: ["The closest reported altimeter setting", "29.92 inches of mercury", "Whatever is published on the en-route chart", "30.00 inches of mercury"],
        ans: 1,
        exp: "Above 18,000 ft MSL, all aircraft set the altimeter to 29.92\" Hg and report altitudes as Flight Levels (FL)."
      },
      {
        q: "A change in altimeter setting from 29.15 to 29.85 (an increase of 0.70\") would cause the indicated altitude to:",
        opts: ["Decrease by 70 ft", "Decrease by 700 ft", "Increase by 700 ft", "Increase by 7,000 ft"],
        ans: 2,
        exp: "Approximately 1,000 ft per 1\" Hg. A 0.70\" increase in setting raises the indicated altitude by ~700 ft."
      },
      {
        q: "'From HIGH to LOW, look out BELOW' refers to flying from:",
        opts: ["High to low altitude — descending", "High to low pressure (or temperature) without resetting altimeter → actual altitude is LOWER than indicated", "High to low frequency on the comm radio", "High to low pressure systems on a sectional"],
        ans: 1,
        exp: "When flying from high to low pressure (or temperature) without resetting the altimeter, the aircraft is actually LOWER than indicated — terrain clearance is reduced ('look out below')."
      },
      {
        q: "When CRUISING below 18,000 ft MSL, the altimeter setting must be from a station along the route of flight within:",
        opts: ["50 NM", "100 NM", "200 NM", "Any station in the same region"],
        ans: 1,
        exp: "14 CFR 91.121 requires the current altimeter setting from a station within 100 NM along the route. If none available, use an appropriate station."
      },
      {
        q: "Which two fundamental properties of gyroscopes are used in flight instruments?",
        opts: ["Rigidity in space and precession", "Centrifugal force and inertia", "Bernoulli's principle and Newton's 3rd law", "Magnetic field alignment and inertia"],
        ans: 0,
        exp: "Rigidity in space (AI, HI) — gyro maintains its plane of rotation. Precession (Turn Coordinator) — force applied creates a reaction 90° ahead in rotation direction."
      },
      {
        q: "A STANDARD-RATE TURN is:",
        opts: ["1° per second", "3° per second (360° in 2 minutes)", "5° per second", "10° per second (360° in 1 minute)"],
        ans: 1,
        exp: "Standard rate = 3°/second → 360° in 2 minutes. Indicated by the wing-tip alignment with the standard-rate marker on the turn coordinator."
      },
      {
        q: "The ball in the inclinometer is centered when the airplane is in:",
        opts: ["Any turn", "Coordinated flight", "A skidding turn", "A slipping turn"],
        ans: 1,
        exp: "Centered ball = coordinated (balanced) flight. Ball OUTSIDE turn = SKID (too much rudder). Ball INSIDE turn = SLIP (too little rudder). Rule: 'step on the ball'."
      },
      {
        q: "In a SKIDDING turn, to coordinate, the pilot should:",
        opts: ["Apply more rudder in the direction of turn", "Reduce rudder pressure, increase bank, or both — to center the ball", "Apply opposite aileron", "Reduce power"],
        ans: 1,
        exp: "A skid means rate of turn is too great for the angle of bank. Reduce rudder pressure (was too much), increase bank to match the rate of turn, or combine both."
      },
      {
        q: "The heading indicator must be aligned with the magnetic compass approximately every:",
        opts: ["5 minutes", "15 minutes", "30 minutes", "60 minutes"],
        ans: 1,
        exp: "Due to gyroscopic precession from bearing friction or improper vacuum pressure, realign every 15 minutes during straight-and-level, unaccelerated flight."
      },
      {
        q: "What does the AHRS (Attitude and Heading Reference System) in a glass cockpit do?",
        opts: ["Provides pitot/static derived airspeed", "Replaces free-spinning gyros with solid-state laser systems; sends attitude info to the PFD", "Generates the moving map display", "Tunes navigation frequencies automatically"],
        ans: 1,
        exp: "AHRS uses solid-state laser/sensor systems instead of mechanical gyros. No tumbling. Pitch/bank info sent to PFD. Heading derived from a magnetometer."
      },
      {
        q: "What does the Air Data Computer (ADC) provide?",
        opts: ["Attitude and heading data", "Airspeed, altitude, and vertical speed from pitot/static inputs", "Engine data only", "GPS position"],
        ans: 1,
        exp: "ADC receives pitot and static inputs, computes the differential, and generates airspeed, altitude, and vertical speed displays for the PFD."
      },
      {
        q: "The PRIMARY function of engine oil is:",
        opts: ["Cleaning carbon from spark plugs", "Lubricating, sealing, cleaning, and (most importantly) COOLING engine components", "Reducing fuel consumption", "Powering the gyroscopic instruments"],
        ans: 1,
        exp: "Engine oil has four basic functions: lubricate, seal, clean, COOL. Cooling is the most important — always check oil level before long summer cross-countries."
      },
      {
        q: "Excessively high engine temperatures can be reduced by:",
        opts: ["Increasing power and climbing more steeply", "Enriching the mixture, opening cowl flaps, reducing power, or increasing airspeed", "Using lower-octane fuel", "Adding carb heat"],
        ans: 1,
        exp: "Reduce engine temps by: enriching mixture (more fuel = more cooling), opening cowl flaps (more cooling airflow), reducing power, increasing airspeed (more ram air). Use higher-grade fuel per POH."
      },
      {
        q: "On a constant-speed propeller airplane, propeller RPM is controlled by:",
        opts: ["The throttle", "The propeller control (governor)", "The mixture control", "The carburetor heat"],
        ans: 1,
        exp: "The propeller control adjusts blade angle to maintain RPM (registered on the tachometer). The throttle controls manifold pressure (power output)."
      },
      {
        q: "On a constant-speed propeller setup, what combination should be AVOIDED?",
        opts: ["High RPM with high MP", "High MP with low RPM", "Low MP with low RPM", "Low MP with high RPM"],
        ans: 1,
        exp: "High manifold pressure with low RPM is hard on the cylinders. Reduce MP before reducing RPM; increase RPM before increasing MP. Consult POH/AFM."
      },
      {
        q: "Magnetos are powered by:",
        opts: ["The aircraft battery", "The aircraft electrical system", "Engine rotation (self-contained, geared to the crankshaft)", "An external power supply"],
        ans: 2,
        exp: "Magnetos are engine-driven and completely SEPARATE from the aircraft electrical system. They continue to fire as long as the engine turns, regardless of master switch."
      },
      {
        q: "A broken P-lead (magneto ground wire) creates a hazard because:",
        opts: ["The magneto will not work", "The magneto will continue to fire even with ignition switch OFF, so moving the propeller could start the engine", "The engine cannot be shut down", "Both B and C"],
        ans: 3,
        exp: "A broken P-lead means the magneto remains 'hot'. Moving the prop could start the engine even with the switch off. To stop a running engine in this condition: move mixture to idle cut-off. Always treat the prop as live."
      },
      {
        q: "Carburetor ice is MOST LIKELY when:",
        opts: ["OAT is below freezing with low humidity", "OAT is between approximately -7°C (20°F) and 21°C (70°F) and humidity is above 80%", "OAT is above 38°C (100°F)", "Flying in clear, dry air"],
        ans: 1,
        exp: "Carburetor icing is most likely with OAT between 20°F and 70°F and humidity above 80% — even on clear days. The carburetor venturi can cool air by 15°C (27°F), causing ice formation."
      },
      {
        q: "The first indication of carburetor ice in a fixed-pitch propeller airplane is:",
        opts: ["Drop in manifold pressure", "Loss of RPM", "Increase in EGT", "Engine roughness only"],
        ans: 1,
        exp: "Fixed-pitch: loss of RPM is the first indication (engine roughness follows). On constant-speed propellers, the first indication is a drop in MP since the governor maintains RPM by adjusting pitch."
      },
      {
        q: "Carburetor heat should be applied:",
        opts: ["Partially, to gradually warm the carburetor", "Fully (full ON), and left on until certain ice has been removed", "Only during takeoff", "Only during cruise"],
        ans: 1,
        exp: "Apply FULL carb heat when icing is detected. Partial heat may bring induction air into the icing range and worsen the problem. Do NOT use carb heat at full power (takeoff)."
      },
      {
        q: "When carburetor heat is applied with NO ICE present (fixed-pitch), what happens to RPM?",
        opts: ["RPM rises immediately", "RPM drops (warmer, less dense air; richer mixture)", "No change", "RPM oscillates"],
        ans: 1,
        exp: "Carb heat air is hotter, less dense, and enriches the mixture — power and RPM decrease slightly. If ICE was present: RPM first drops, then GRADUALLY increases as ice melts."
      },
      {
        q: "At altitude, the fuel/air mixture should be:",
        opts: ["Enriched (more fuel) to compensate for thinner air", "Leaned (less fuel) to compensate for decreased air density", "Left at full rich", "Adjusted only on the ground"],
        ans: 1,
        exp: "Air density decreases with altitude. Without leaning, the mixture becomes too rich (carb meters fuel by volume, but the air WEIGHT decreases). Lean to maintain the proper fuel/air ratio."
      },
      {
        q: "Detonation is caused by:",
        opts: ["Using HIGHER-than-specified octane fuel", "Using LOWER-than-specified octane fuel or excessive engine temperature", "Operating with full-rich mixture", "Using carb heat at high altitude"],
        ans: 1,
        exp: "Detonation = fuel/air mixture explodes instead of burning evenly. Causes: lower-than-specified octane fuel, OR excessive engine temperatures. Can damage pistons/cylinders/valves."
      },
      {
        q: "100LL aviation fuel is colored:",
        opts: ["Red", "Green", "Blue", "Clear"],
        ans: 2,
        exp: "100LL = BLUE. Fuels are dyed at the refinery for identification. If accidentally mixed, fuels turn STRAW-COLORED."
      },
      {
        q: "Before each flight, the pilot should:",
        opts: ["Drain a sample from each fuel sump and strainer to check for water and contamination", "Top off the tanks only", "Check oil pressure", "Switch to the auxiliary fuel tank"],
        ans: 0,
        exp: "Always drain and visually inspect fuel from sumps and strainers for water and contamination before every flight."
      },
      {
        q: "Aircraft engine preheat is recommended at temperatures below:",
        opts: ["32°F (0°C)", "20°F", "0°F (required by most manufacturers)", "Always required regardless of temperature"],
        ans: 2,
        exp: "Most engine manufacturers REQUIRE preheat below 0°F and RECOMMEND it below 20°F. Cold thick oil doesn't lubricate properly during start, risking engine damage."
      },
      {
        q: "Most light airplanes have what type of electrical system?",
        opts: ["12-volt battery / 14-volt direct-current alternator", "24-volt battery / 28-volt alternator", "120-volt alternating current", "Battery only (no alternator)"],
        ans: 0,
        exp: "Most light airplanes have a 12-volt battery with a 14-volt DC alternator system. Larger aircraft may use 24/28 volts for additional electrical capacity."
      },
      {
        q: "An ammeter showing a NEGATIVE indication (other than briefly during start) means:",
        opts: ["The battery is fully charged", "More current is being drawn from the battery than is being replaced — possible alternator failure or overload", "The starter is engaged", "Normal cruise operation"],
        ans: 1,
        exp: "Negative reading means battery discharging. Likely alternator failure or system overload. Turn off nonessential electrical equipment to conserve battery."
      },
      {
        q: "A circuit breaker has popped for the SECOND time after being reset. The pilot should:",
        opts: ["Reset it again — it may have been an isolated event", "Push it in harder", "NOT reset it — likely a short circuit; resetting risks fire", "Reset, then turn off the master switch"],
        ans: 2,
        exp: "If a breaker trips twice, there's probably a short. Do NOT reset — fire risk. Note the affected system as inoperative."
      },
      {
        q: "An advantage of an ALTERNATOR over a GENERATOR is:",
        opts: ["Produces adequate current at low engine RPM and has more constant output", "Heavier and more durable", "Requires no voltage regulator", "Uses less fuel"],
        ans: 0,
        exp: "Alternators produce sufficient current even at low RPM (generators do not). More constant output across RPM range. Also lighter, cheaper to maintain, less prone to overload."
      },
      {
        q: "The master switch controls:",
        opts: ["All electrical systems EXCEPT the ignition system", "Only the avionics", "The engine ignition magnetos", "Only the starter"],
        ans: 0,
        exp: "Master switch energizes the entire electrical bus EXCEPT ignition (powered by magnetos). Even with master switch off, the engine can fire if magneto P-lead is grounded improperly."
      },
      {
        q: "If the alternator fails in flight, the pilot should:",
        opts: ["Continue using all systems normally", "Turn off nonessential electrical equipment to conserve battery energy", "Increase engine RPM to maximum", "Use carb heat to restore alternator function"],
        ans: 1,
        exp: "With alternator failure, ALL electrical load is on the battery. Turn off nonessential equipment (interior lights, second comm, etc.) to extend battery life. Land as soon as practical."
      },
      {
        q: "The PURPOSE of installing a magnetometer on a glass-panel aircraft is to:",
        opts: ["Replace the gyroscope in the heading indicator", "Sense Earth's magnetic flux to provide heading information to the AHRS/PFD", "Measure engine oil temperature", "Detect carburetor icing"],
        ans: 1,
        exp: "The magnetometer senses the Earth's magnetic field and provides heading info to the AHRS, which is then displayed on the PFD. Replaces the function (but not the principle) of the spinning HI."
      },
      {
        q: "What does the white arc on the airspeed indicator UPPER limit indicate?",
        opts: ["VS0 — landing config stall", "VFE — maximum flap-extended speed", "VNO — max structural cruising speed", "VNE — never exceed"],
        ans: 1,
        exp: "Top of the white arc = VFE = max flap-extended speed. Exceeding this with flaps down can cause structural damage to the flap mechanism."
      },
      {
        q: "An exhaust gas temperature (EGT) gauge helps the pilot to:",
        opts: ["Detect carburetor ice", "Lean the mixture more precisely, potentially saving up to 10% fuel", "Monitor oil pressure", "Determine TAS"],
        ans: 1,
        exp: "EGT lets the pilot lean to peak EGT, then enrich a specified amount (typically 25-75°F drop). Properly used, can reduce fuel consumption by ~10%."
      },
      {
        q: "On a fixed-pitch propeller aircraft, RPM is controlled by:",
        opts: ["The propeller governor", "The throttle (direct relationship to RPM)", "The mixture control", "The constant-speed unit"],
        ans: 1,
        exp: "Fixed-pitch propellers have no governor — throttle position directly controls RPM. The throttle controls power, and RPM follows."
      },
      {
        q: "What is the function of the float in a float-type carburetor?",
        opts: ["Reduces fuel pressure", "Maintains constant fuel level in the float chamber (via a needle valve) to meter correct amount into the carburetor", "Pumps fuel during startup", "Prevents detonation"],
        ans: 1,
        exp: "The float operates a needle valve that opens/closes the fuel inlet to maintain a constant fuel level in the chamber. This meters proper fuel quantity through the discharge nozzle."
      },
      {
        q: "If the carb heat handle is left ON during a takeoff:",
        opts: ["Takeoff distance will decrease", "Engine will produce LESS power (warmer, less dense air; richer mixture)", "Carburetor ice cannot form during takeoff regardless", "Engine RPM will exceed maximum"],
        ans: 1,
        exp: "Carb heat reduces engine power because the hot air is less dense and the mixture becomes richer. Carb heat should NOT be used during full-power operations like takeoff (except per POH)."
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
      { front: "What does 'Administrator' mean under 14 CFR Part 1?", back: "The FAA Administrator or any person to whom authority has been delegated in the matter concerned." },
      { front: "What is an 'aircraft' under 14 CFR Part 1?", back: "A device that is used or intended to be used for flight in the air." },
      { front: "What does 'airframe' include under 14 CFR Part 1?", back: "The fuselage, booms, nacelles, cowlings, fairings, airfoil surfaces (excluding propellers/engines), and landing gear of an aircraft, plus their accessories and controls." },
      { front: "What is an 'airplane' under 14 CFR Part 1?", back: "An engine-driven fixed-wing aircraft heavier than air that is supported in flight by the dynamic reaction of the air against its wings." },
      { front: "What is an 'airport' under 14 CFR Part 1?", back: "An area of land or water used or intended for landing and takeoff of aircraft, including its buildings and facilities." },
      { front: "What does 'air traffic' mean under 14 CFR Part 1?", back: "Aircraft operating in the air or on an airport surface, exclusive of loading ramps and parking areas." },
      { front: "What is an 'air traffic clearance'?", back: "An authorization to proceed under specified traffic conditions in controlled airspace." },
      { front: "What is 'air traffic control (ATC)'?", back: "A service operated by appropriate authority to promote the safe, orderly, and expeditious flow of air traffic." },
      { front: "What is an 'alert area' in aviation?", back: "Airspace established to inform pilots of an area with a high volume of pilot training or unusual aeronautical activity." },
      { front: "What is an 'alternate airport'?", back: "An airport at which an aircraft may land if landing at the intended airport becomes inadvisable." },
      { front: "What does 'category' mean for airman certification under 14 CFR Part 1?", back: "A broad classification of aircraft — examples: airplane, rotorcraft, glider, lighter-than-air." },
      { front: "What does 'category' mean for aircraft certification under 14 CFR Part 1?", back: "Classification based on intended use or operating limitations — examples: transport, normal, utility, limited, restricted, acrobatic, provisional." },
      { front: "What does 'class' mean for airman certification under 14 CFR Part 1?", back: "A classification within a category having similar operating characteristics — examples: single-engine, multi-engine, land, water, gyroplane, helicopter, airship, free balloon." },
      { front: "What is 'ceiling' under 14 CFR Part 1?", back: "The height above Earth's surface of the lowest layer of clouds or obscuring phenomena reported as 'broken,' 'overcast,' or 'obscuration' — not classified as 'thin' or 'partial.'" },
      { front: "What is 'civil aircraft'?", back: "Aircraft other than public aircraft." },
      { front: "What is a 'commercial operator' under 14 CFR Part 1?", back: "A person who uses an aircraft to transport persons or property for compensation or hire." },
      { front: "What test is applied if it is doubtful whether an operation is for compensation or hire?", back: "Whether the operation is merely incidental to the person's other business, or is in itself a major enterprise for profit." },
      { front: "What is 'controlled airspace'?", back: "Airspace of defined dimensions within which ATC service is provided to IFR flights and VFR flights according to airspace classification. A generic term covering Class A, B, C, D, and E airspace." },
      { front: "What is a 'controlled firing area'?", back: "Airspace established to contain activities that, if not conducted in a controlled environment, would be hazardous to nonparticipating aircraft." },
      { front: "What is a 'crewmember'?", back: "A person assigned to perform duty in an aircraft during flight time." },
      { front: "What is 'decision height (DH)'?", back: "The height AGL at which a decision must be made on an instrument approach to continue or execute a missed approach." },
      { front: "What is 'decision altitude (DA)'?", back: "The same concept as decision height, but expressed in feet above MSL." },
      { front: "What is an 'enhanced flight vision system (EFVS)'?", back: "An installed aircraft system using electronic means to display forward external scene topography through imaging sensors (e.g., forward-looking infrared, millimeter wave radar, low-light intensification). Includes display, sensors, computers, power supplies, and controls." },
      { front: "What is a 'flight plan'?", back: "Specified information relating to the intended flight of an aircraft, filed orally or in writing with ATC." },
      { front: "What is a 'flight simulation training device (FSTD)'?", back: "A full flight simulator or a flight training device." },
      { front: "What is 'flight time'?", back: "Pilot time that commences when an aircraft moves under its own power for the purpose of flight and ends when the aircraft comes to rest after landing." },
      { front: "What is 'flight visibility'?", back: "The average forward horizontal distance from the flight deck at which prominent unlighted objects may be seen and identified by day, and prominent lighted objects may be seen and identified by night." },
      { front: "What is 'ground visibility'?", back: "Prevailing horizontal visibility near Earth's surface as reported by the National Weather Service or an accredited observer." },
      { front: "What are 'IFR conditions'?", back: "Weather conditions below the minimum for flight under visual flight rules." },
      { front: "What is 'IFR over-the-top'?", back: "Operation of aircraft over-the-top on an IFR flight plan when cleared by ATC to maintain 'VFR conditions' or 'VFR conditions on top.'" },
      { front: "What is an 'instrument' under 14 CFR Part 1?", back: "A device using an internal mechanism to indicate visually or aurally the attitude, altitude, or operation of an aircraft or aircraft part, including electronic devices for automatically controlling an aircraft in flight." },
      { front: "What is a 'large aircraft'?", back: "An aircraft having a maximum certificated takeoff weight of more than 12,500 lb." },
      { front: "What is the maximum takeoff weight for a light-sport aircraft not intended for operation on water?", back: "1,320 lb." },
      { front: "What is the maximum takeoff weight for a light-sport aircraft intended for operation on water?", back: "1,430 lb." },
      { front: "What is the maximum airspeed (VH) for a light-sport aircraft in level flight with max continuous power?", back: "120 kt. CAS under standard atmospheric conditions at sea level." },
      { front: "What is the maximum VNE for a light-sport glider?", back: "120 kt. CAS." },
      { front: "What is the maximum stalling speed (VS1) for a light-sport aircraft?", back: "45 kt. CAS at maximum certificated takeoff weight and most critical center of gravity." },
      { front: "What is the maximum seating capacity for a light-sport aircraft?", back: "No more than two persons, including the pilot." },
      { front: "What engine type is permitted on a powered light-sport aircraft?", back: "A single, reciprocating engine only." },
      { front: "What propeller type is required on a powered light-sport aircraft (other than a powered glider)?", back: "Fixed or ground-adjustable propeller." },
      { front: "What propeller system is required on a light-sport powered glider?", back: "Fixed or feathering propeller system." },
      { front: "What rotor system is required on a light-sport gyroplane?", back: "Fixed-pitch, semi-rigid, teetering, two-blade rotor system." },
      { front: "Can a light-sport aircraft have a pressurized cabin?", back: "No — a nonpressurized cabin is required if a cabin is equipped." },
      { front: "What landing gear is required on a light-sport aircraft (non-water, non-glider)?", back: "Fixed landing gear." },
      { front: "What is 'maintenance' under 14 CFR Part 1?", back: "Inspection, overhaul, repair, and preservation of the aircraft and replacement of parts — excludes preventive maintenance." },
      { front: "What is a 'major alteration'?", back: "An alteration not listed in aircraft/engine/propeller specifications that might appreciably affect weight, balance, structural strength, performance, powerplant operation, flight characteristics, or airworthiness — or is not done per accepted practices or by elementary operations." },
      { front: "What is a 'major repair'?", back: "A repair that, if improperly done, might appreciably affect weight, balance, structural strength, performance, powerplant operation, flight characteristics, or other qualities affecting airworthiness — or is not done per accepted practices or by elementary operations." },
      { front: "What is 'manifold pressure'?", back: "Absolute pressure measured at the appropriate point in the induction system, usually expressed in inches of mercury." },
      { front: "What is a 'medical certificate'?", back: "Acceptable evidence of physical fitness on a form prescribed by the FAA Administrator." },
      { front: "What is 'minimum descent altitude (MDA)'?", back: "The lowest altitude (in feet MSL) to which descent is authorized on final approach or during circle-to-land maneuvering on a standard instrument approach procedure." },
      { front: "What is a 'minor repair'?", back: "A repair other than a major repair." },
      { front: "How is 'night' defined for general purposes under 14 CFR Part 1?", back: "Between the end of evening civil twilight and the beginning of morning civil twilight, as published in The Air Almanac, converted to local time." },
      { front: "How is 'night' defined for recency of experience under 14 CFR 61.57?", back: "From 1 hour after sunset to 1 hour before sunrise." },
      { front: "What is a 'nonprecision approach procedure'?", back: "A standard instrument approach procedure in which no electronic glide slope is provided." },
      { front: "What does 'operate' mean with respect to aircraft?", back: "To use, cause to use, or authorize use of aircraft for air navigation — including piloting — with or without the right of legal control." },
      { front: "What is 'operational control' of a flight?", back: "The exercise of authority over initiating, conducting, or terminating a flight." },
      { front: "What is 'pilotage'?", back: "Navigation by visual reference to landmarks." },
      { front: "What are the three elements of the definition of 'pilot in command (PIC)'?", back: "(1) Has final authority and responsibility for the operation and safety of the flight; (2) Has been designated as PIC before or during the flight; (3) Holds the appropriate category, class, and type rating for the flight." },
      { front: "What is 'positive control'?", back: "Control of all air traffic within designated airspace by ATC." },
      { front: "What is a 'precision approach procedure'?", back: "A standard instrument approach procedure in which an electronic glide slope (e.g., ILS or PAR) is provided." },
      { front: "What is 'preventive maintenance'?", back: "Simple or minor preservation operations and the replacement of small standard parts not involving complex assembly operations." },
      { front: "What is a 'prohibited area'?", back: "Airspace designated under 14 CFR Part 73 within which no person may operate an aircraft without permission of the using agency." },
      { front: "What is a 'rating'?", back: "A statement that, as part of a certificate, sets forth special conditions, privileges, and limitations." },
      { front: "What is a 'restricted area'?", back: "Airspace designated under 14 CFR Part 73 within which flight is not wholly prohibited but is subject to restriction." },
      { front: "What is a 'small aircraft'?", back: "An aircraft having a maximum certificated takeoff weight of 12,500 lb. or less." },
      { front: "What is a 'small unmanned aircraft'?", back: "An unmanned aircraft weighing less than 55 lb. on takeoff, including everything on board or attached." },
      { front: "What are 'Special VFR conditions'?", back: "Meteorological conditions less than those required for basic VFR flight in controlled airspace, in which some aircraft are permitted VFR flight." },
      { front: "What must Special VFR operations be?", back: "Requested by the pilot and approved by ATC." },
      { front: "What is a 'stopway'?", back: "An area beyond the takeoff runway, no less wide than the runway, centered on the extended centerline, able to support the airplane during an aborted takeoff without structural damage — designated for decelerating during an aborted takeoff." },
      { front: "What is 'synthetic vision'?", back: "A computer-generated image of the external scene topography from the flight deck perspective, derived from aircraft attitude, high-precision navigation, and a database of terrain, obstacles, and cultural features." },
      { front: "What is a 'synthetic vision system'?", back: "An electronic means to display a synthetic vision image of the external scene topography to the flight crew." },
      { front: "What is a 'traffic pattern'?", back: "The traffic flow prescribed for aircraft landing at, taxiing on, or taking off from an airport." },
      { front: "What is an 'unmanned aircraft'?", back: "An aircraft operated without the possibility of direct human intervention from within or on the aircraft." },
      { front: "What is 'VFR over-the-top'?", back: "Operation of aircraft over-the-top under VFR when NOT operating on an IFR flight plan." },
      { front: "What is a 'warning area'?", back: "Airspace of defined dimensions extending from 3 NM outward from the U.S. coast containing activity that may be hazardous to nonparticipating aircraft. May be over domestic or international waters." },
      { front: "What does AFM stand for?", back: "Airplane flight manual." },
      { front: "What does AGL stand for?", back: "Above ground level." },
      { front: "What does CAS stand for?", back: "Calibrated airspeed." },
      { front: "What does DME stand for?", back: "Distance-measuring equipment compatible with TACAN." },
      { front: "What does HIRL stand for?", back: "High-intensity runway light system." },
      { front: "What does IAS stand for?", back: "Indicated airspeed." },
      { front: "What does LSA stand for?", back: "Light sport aircraft." },
      { front: "What does MEL stand for?", back: "Minimum equipment list." },
      { front: "What does MSL stand for?", back: "Mean sea level." },
      { front: "What does REIL stand for?", back: "Runway end identification lights." },
      { front: "What does RNAV stand for?", back: "Area navigation." },
      { front: "What does TACAN stand for?", back: "Ultra-high-frequency tactical air navigational aid." },
      { front: "What does TAS stand for?", back: "True airspeed." },
      { front: "What does TCAS stand for?", back: "A traffic alert and collision avoidance system." },
      { front: "What does TDZL stand for?", back: "Touchdown zone lights." },
      { front: "What does TSO stand for?", back: "Technical standard order." },
      { front: "What does VA stand for?", back: "Design maneuvering speed." },
      { front: "What does VFE stand for?", back: "Maximum flap extended speed." },
      { front: "What does VH stand for?", back: "Maximum speed in level flight with maximum continuous power." },
      { front: "What does VLE stand for?", back: "Maximum landing gear extended speed." },
      { front: "What does VLO stand for?", back: "Maximum landing gear operating speed." },
      { front: "What does VLOF stand for?", back: "Lift-off speed." },
      { front: "What does VMC stand for?", back: "Minimum control speed with the critical engine of a multi-engine airplane inoperative." },
      { front: "What does VMO/MMO stand for?", back: "Maximum operating limit speed." },
      { front: "What does VNE stand for?", back: "Never-exceed speed." },
      { front: "What does VNO stand for?", back: "Maximum structural cruising speed." },
      { front: "What does VR stand for?", back: "Rotation speed." },
      { front: "What does VS stand for?", back: "Stalling speed or minimum steady flight speed at which the airplane is controllable." },
      { front: "What does VS0 stand for?", back: "Stalling speed or minimum steady flight speed in the landing configuration." },
      { front: "What does VS1 stand for?", back: "Stalling speed or minimum steady flight speed obtained in a specific configuration." },
      { front: "What does VX stand for?", back: "Speed for best angle of climb." },
      { front: "What does VY stand for?", back: "Speed for best rate of climb." },
      { front: "What does VORTAC stand for?", back: "Collocated VOR and TACAN." },
      { front: "What does DA stand for (instrument)?", back: "Decision altitude." },
      { front: "What does DH stand for (instrument)?", back: "Decision height." },
      { front: "What does GS stand for?", back: "Glide slope." },
      { front: "What does ILS stand for?", back: "Instrument landing system." },
      { front: "What does LOC stand for?", back: "ILS localizer." },
      { front: "What does MAA stand for?", back: "Maximum authorized IFR altitude." },
      { front: "What does MDA stand for?", back: "Minimum descent altitude." },
      { front: "What does MEA stand for?", back: "Minimum en route IFR altitude." },
      { front: "What does MOCA stand for?", back: "Minimum obstruction clearance altitude." },
      { front: "What does PAR stand for?", back: "Precision approach radar." },
      { front: "What does RVR stand for?", back: "Runway visual range as measured in the touchdown zone area." },
      { front: "What aircraft types receive a standard airworthiness certificate?", back: "Aircraft type certificated in normal, utility, acrobatic, commuter, or transport category; manned free balloons; and aircraft designated by the Administrator as special classes." },
      { front: "What are the types of special airworthiness certificates?", back: "Primary, restricted, limited, light-sport, and provisional airworthiness certificates; special flight permits; and experimental certificates." },
      { front: "How long does an airworthiness certificate remain in force?", back: "As long as maintenance and alteration of the aircraft are performed in accordance with Federal Aviation Regulations." },
      { front: "For what purposes may a special flight permit be issued?", back: "(1) Flying to a base for repairs/maintenance/storage; (2) Delivering or exporting the aircraft; (3) Production flight testing new aircraft; (4) Evacuating aircraft from areas of impending danger; (5) Conducting customer demonstration flights on new aircraft that completed production flight tests." },
      { front: "Can a special flight permit be issued for a flight at a weight exceeding maximum certificated takeoff weight?", back: "Yes — to authorize flight beyond normal range over water or land areas where adequate landing facilities or fuel are unavailable." },
      { front: "What must an applicant for a special flight permit submit to the FAA?", back: "A statement including: (1) purpose of flight; (2) proposed itinerary; (3) crew required; (4) ways aircraft does not comply with airworthiness requirements; (5) any restrictions the applicant considers necessary; (6) any other information FAA considers necessary." },
      { front: "What is the purpose of 14 CFR Part 39?", back: "To provide a legal framework for the FAA's system of Airworthiness Directives." },
      { front: "To what do airworthiness directives apply?", back: "Aircraft, aircraft engines, propellers, and appliances (e.g., vacuum pump, alternator, navigation radios)." },
      { front: "Under what two conditions does the FAA issue an airworthiness directive?", back: "(1) An unsafe condition exists in the product AND (2) the condition is likely to exist or develop in other products of the same type design." },
      { front: "What is the legal effect of operating a product that does not meet an applicable AD?", back: "A violation of 14 CFR 39.7 occurs each time the aircraft is operated or the product is used." },
      { front: "What do ADs specify?", back: "Inspections you must carry out, conditions and limitations you must comply with, and actions required to resolve an unsafe condition." },
      { front: "Are ADs part of the Code of Federal Regulations?", back: "Yes, but they are not codified in the annual edition. They are published in full in the Federal Register as amendments to Part 39." },
      { front: "What does 14 CFR Part 43 govern?", back: "Maintenance, preventive maintenance, rebuilding, and alteration of any aircraft with a U.S. airworthiness certificate, and their airframe, engine(s), propellers, appliances, and component parts." },
      { front: "Does Part 43 apply to aircraft with an experimental certificate?", back: "No, unless the FAA previously issued a different kind of airworthiness certificate for that aircraft." },
      { front: "Who may perform preventive maintenance under 14 CFR 43.3?", back: "A person who holds a pilot certificate (e.g., private pilot) may perform preventive maintenance on any airplane they own or operate that is not used in air carrier services." },
      { front: "Who must approve an aircraft for return to service after a pilot performs preventive maintenance?", back: "The pilot must hold at least a private pilot certificate." },
      { front: "Who may approve a light-sport aircraft for return to service after preventive maintenance?", back: "A pilot holding at least a sport pilot certificate." },
      { front: "What must be entered in the aircraft maintenance records after preventive maintenance?", back: "The signature, certificate number, kind of certificate held by the approving person, the date, and a description of the work performed." },
      { front: "Give four examples of preventive maintenance listed in Appendix A of Part 43.", back: "(1) Removal, installation, and repair of landing gear tires; (2) Replenishing hydraulic fluid; (3) Servicing landing gear struts; (4) Replacing landing light bulbs." },
      { front: "What mnemonic helps recall when aircraft registration ends?", back: "'30 foot duck': 30 days after death of certificate holder; Foreign registration; Transfer of ownership; Destruction of aircraft; United States citizenship revoked; Cancellation of registration." },
      { front: "When is a Dealer's Aircraft Registration Certificate valid?", back: "Only for flights within the United States by the manufacturer or a dealer, for flight testing or demonstration for sale." },
      { front: "What is 'aeronautical experience' under 14 CFR 61.1?", back: "Pilot time obtained in an aircraft, flight simulator, or FTD for meeting training, flight time, or recency requirements for a certificate, rating, flight review, or recency of flight experience." },
      { front: "Who qualifies as an 'authorized instructor' under 14 CFR Part 61?", back: "(1) A current CFI conducting ground or flight training per their CFI certificate; (2) A valid ground instructor certificate holder conducting ground training; (3) A person authorized by the FAA under Parts 61, 121, 135, or 142." },
      { front: "What is an 'aviation training device'?", back: "A training device, other than a full flight simulator or FTD, that has been evaluated, qualified, and approved by the Administrator." },
      { front: "What is 'cross-country time' for general pilot certificate holders?", back: "Time during a flight conducted by a certificated pilot, in an aircraft, that includes a landing at a point other than departure, using dead reckoning, pilotage, electronic navigation aids, radio aids, or other navigation systems." },
      { front: "What additional requirement applies to 'cross-country time' for private pilot, commercial pilot, instrument rating, or recreational pilot privileges?", back: "The flight must include a landing point at least 50 NM straight-line distance from the original departure point." },
      { front: "What is 'cross-country time' for ATP purposes?", back: "A flight of at least 50 NM straight-line distance from origin, using navigation systems — a landing is NOT required (unlike other certificate levels)." },
      { front: "What is 'flight time' under 14 CFR 61.1?", back: "Pilot time that commences when an aircraft moves under its own power for the purpose of flight and ends when the aircraft comes to rest after landing." },
      { front: "What is 'flight training' under 14 CFR Part 61?", back: "Training other than ground training, received from an authorized instructor in flight in an aircraft." },
      { front: "What is a 'flight training device (FTD)' under Part 61?", back: "A replica of instruments, equipment, panels, and controls of an aircraft in an open or enclosed flight deck; does not need a force (motion) cuing or visual system; must be evaluated, qualified, and approved by the FAA." },
      { front: "What is a 'full flight simulator (FFS)'?", back: "A replica of a specific type/make/model aircraft with equipment and software to represent ground and flight operations, a visual out-of-the-aircraft view, a 3-degree-of-freedom motion system, and FAA approval." },
      { front: "What is 'instrument training'?", back: "Time in which instrument training is received from an authorized instructor under actual or simulated instrument conditions." },
      { front: "What is a 'practical test'?", back: "A test on areas of operation for an airman certificate, rating, or authorization, conducted by having the applicant respond to questions and demonstrate maneuvers in flight, a flight simulator, or a flight training device." },
      { front: "What must a pilot have in their personal possession when acting as PIC or required crewmember?", back: "A valid pilot certificate, a current and appropriate medical certificate, and a current valid photo identification readily accessible in the airplane." },
      { front: "Who may request to see a pilot certificate or medical certificate?", back: "The FAA Administrator, the NTSB, any federal/state/local law enforcement officer, or an authorized TSA representative." },
      { front: "List six acceptable forms of photo ID for a pilot.", back: "(1) State-issued driver's license; (2) Federal government ID card; (3) U.S. Armed Forces ID; (4) Official passport; (5) Credential authorizing unescorted access to a security identification display area at an airport; (6) Another form acceptable to the Administrator." },
      { front: "Does a flight instructor need a current medical certificate?", back: "Not if the CFI is NOT acting as PIC or a required flight crewmember." },
      { front: "Is a medical certificate required to exercise ground instructor privileges?", back: "No." },
      { front: "What must only a flight instructor with the appropriate rating do? (Four items)", back: "(1) Give training required to qualify for solo and solo cross-country; (2) Endorse for pilot/instructor/ground instructor certificates or ratings; (3) Endorse a pilot logbook to show training given; (4) Endorse a student pilot certificate and logbook for solo operating privileges." },
      { front: "When is a flight instructor certificate NOT necessary for giving training?", back: "When training is given by: (1) an ATP holder under Part 121 or 135; (2) a Part 142 qualified instructor under an approved program; (3) the holder of a ground instructor certificate; (4) an authorized non-FAA flight instructor (e.g., military)." },
      { front: "What rating must a PIC hold to operate under IFR or in weather below VFR minimums?", back: "An instrument rating (airplane)." },
      { front: "What can a ground instructor with the appropriate rating do? (Three items)", back: "(1) Give ground training to qualify for solo and solo cross-country; (2) Endorse for knowledge tests for certificates/ratings; (3) Endorse a pilot logbook to show ground training given." },
      { front: "What pilot certificates are issued under 14 CFR Part 61?", back: "Student, sport, recreational, private, commercial, and airline transport pilot certificates; also flight instructor and ground instructor certificates." },
      { front: "What airplane class ratings may be placed on a pilot certificate?", back: "Single-engine land, multi-engine land, single-engine sea, and multi-engine sea." },
      { front: "What is the penalty for a certificate or rating that has been revoked?", back: "You may not apply for any certificate or rating for 1 year after the revocation." },
      { front: "When must a motor vehicle action involving alcohol or drugs be reported to the FAA Civil Aviation Security Division?", back: "No later than 60 days after the motor vehicle action." },
      { front: "What can a drug/alcohol conviction result in?", back: "(1) Denial of an application for a certificate or rating for up to 1 year after final conviction; (2) Suspension or revocation of any existing certificates or ratings." },
      { front: "What happens if you refuse to submit alcohol/drug test results when requested by the FAA?", back: "You may not receive a certificate or rating for 1 year; it is also grounds for suspension or revocation of existing certificates." },
      { front: "How long is a temporary certificate valid after a practical test?", back: "Maximum 120 days, or until the expiration date, receipt of the permanent certificate, or notice of denial — whichever comes first." },
      { front: "Do pilot and ground instructor certificates issued under Part 61 have expiration dates?", back: "No — they are issued without an expiration date." },
      { front: "What class medical certificate is required to exercise ATP privileges?", back: "First-class medical certificate." },
      { front: "What is the minimum medical certificate required to exercise commercial pilot privileges?", back: "Second-class medical certificate." },
      { front: "What is the minimum medical certificate required for private, recreational, or student pilot privileges?", back: "Third-class medical certificate (or operate under BasicMed)." },
      { front: "How long is a first-class medical valid for ATP operations if the pilot is under age 40?", back: "12 months from the date of examination." },
      { front: "How long is a first-class medical valid for ATP operations if the pilot is age 40 or older?", back: "6 months from the date of examination." },
      { front: "How long is a first-class medical valid for operations requiring only a commercial pilot certificate?", back: "12 months from the date of examination." },
      { front: "How long is a third-class medical valid if the pilot has NOT reached age 40 on the examination date?", back: "60 months (5 years) from the date of examination." },
      { front: "How long is a third-class medical valid if the pilot HAS reached age 40 on the examination date?", back: "24 months (2 years) from the date of examination." },
      { front: "What allows a pilot to fly without an FAA medical certificate using a U.S. driver's license?", back: "BasicMed (Requirements for Operating Certain Small Aircraft Without a Medical Certificate) under 14 CFR Part 68." },
      { front: "What prior medical certificate history is required to fly under BasicMed?", back: "The pilot must have held an FAA medical certificate at any time after July 14, 2006 — the most recent of which cannot have been suspended, revoked, withdrawn, or denied (may be expired; may have been a special issuance)." },
      { front: "Can a pilot who has NEVER held an FAA medical certificate qualify for BasicMed?", back: "No." },
      { front: "What medical education course requirement applies to BasicMed?", back: "An approved medical education course must be completed in the preceding 24 calendar months. Can be taken online free through AOPA Air Safety Institute or Mayo Clinic. Certificate of completion must be retained in logbook." },
      { front: "What medical examination is required for BasicMed?", back: "A comprehensive medical examination from a state-licensed physician or AME within the previous 48 months, conducted per the FAA Comprehensive Medical Examination Checklist. Copy retained in logbook." },
      { front: "What aircraft limitations apply when flying under BasicMed?", back: "Aircraft may not be certificated to carry more than 7 occupants and may not have a max certificated takeoff weight exceeding 12,500 lb." },
      { front: "What operational limitations apply when flying under BasicMed?", back: "No flight above 18,000 ft. MSL; no flight outside the U.S. (unless authorized by that country); no indicated airspeed greater than 250 kt." },
      { front: "Does BasicMed replace any class of FAA medical certificate?", back: "No — it is an addition to the existing first-, second-, and third-class certificate options." },
      { front: "What must a pilot submit to change their name on a pilot certificate?", back: "The current pilot certificate plus a copy of the marriage license, court order, or other document verifying the change." },
      { front: "Where must a request for replacement of a lost pilot certificate or knowledge test report be sent?", back: "Department of Transportation, FAA, Airmen Certification Branch, PO Box 25082, Oklahoma City, OK 73125 — with a check or money order." },
      { front: "Where must a request for replacement of a lost medical certificate be sent?", back: "Department of Transportation, FAA, Aerospace Medical Certification Division, PO Box 26200, Oklahoma City, OK 73125 — with a check or money order." },
      { front: "How long may an FAA fax confirming a certificate be used pending arrival of the replacement?", back: "Not to exceed 60 days." },
      { front: "What phone number can a pilot call to receive a temporary pilot certificate while awaiting replacement?", back: "(866) 878-2498." },
      { front: "What is required to act as PIC of a complex airplane?", back: "Ground and flight training from an authorized instructor in a complex airplane, plus a one-time logbook endorsement of proficiency." },
      { front: "What defines a 'high-performance airplane'?", back: "An airplane with an engine of more than 200 horsepower." },
      { front: "What is required to act as PIC of a high-performance airplane?", back: "Ground and flight training from an authorized instructor in a high-performance airplane, plus a one-time logbook endorsement." },
      { front: "What is required to act as PIC of a pressurized airplane with service ceiling above 25,000 ft. MSL?", back: "Both ground and flight instruction in such an airplane and a logbook endorsement." },
      { front: "What training is required to act as PIC of a tailwheel airplane?", back: "Flight instruction including: normal and crosswind takeoffs and landings; wheel landings (unless not recommended by manufacturer); go-around procedures — plus a logbook endorsement." },
      { front: "What is required to take a pilot knowledge test?", back: "(1) An instructor endorsement (if required) certifying ground training completion and readiness; (2) Proper photo ID showing name, signature, date of birth meeting age requirement, and actual residential address." },
      { front: "What is the minimum passing grade on a knowledge test?", back: "Usually 70%, as specified by the Administrator." },
      { front: "What materials are permitted to be used during a knowledge test?", back: "A flight computer, plotter, and calculator (with all memory erased before the test). No other aid is permitted." },
      { front: "What is the penalty for cheating on a knowledge test?", back: "Ineligibility to take any test or receive any certificate/rating for 1 year, plus grounds to suspend or revoke existing certificates." },
      { front: "What are the prerequisites for a practical test?", back: "(1) Passed required knowledge test within preceding 24 months; (2) Required instruction and aeronautical experience; (3) At least current third-class medical (if required); (4) Minimum age requirements; (5) CFI written statement of competency within preceding 2 calendar months; (6) Completed and signed application." },
      { front: "If you fail any area of operation on a practical test, what happens?", back: "The entire practical test is failed." },
      { front: "If a practical test is discontinued, how long do you have to complete the remainder and retain credit for passed areas?", back: "60 days after the date the practical test was discontinued." },
      { front: "What aircraft must be used for a practical test?", back: "An appropriate U.S.-registered airplane with a current airworthiness certificate, of the correct category, class, and type — furnished by the applicant." },
      { front: "Who is the PIC during most practical tests (e.g., private, commercial)?", back: "The applicant (not the examiner)." },
      { front: "If you fail a knowledge or practical test, what must you do before retesting?", back: "Receive training from an authorized instructor who determines you are proficient to pass, and obtain an endorsement from that instructor." },
      { front: "What flight experience must be logged to meet certificate requirements?", back: "All training and aeronautical experience used to meet requirements for a certificate, rating, or flight review must be shown by a reliable record (e.g., a logbook)." },
      { front: "What five general items are required in each logbook entry?", back: "(1) Date; (2) Total flight/lesson time; (3) Departure and arrival location; (4) Type and identification of aircraft/simulator/FTD; (5) Name of safety pilot if required." },
      { front: "What conditions of flight must be logged in a logbook?", back: "(1) Day or night; (2) Actual instrument; (3) Simulated instrument conditions." },
      { front: "When can a student pilot log PIC time?", back: "Only when: (1) sole occupant of the airplane (solo); (2) has a current solo flight endorsement; (3) is undergoing training for a certificate or rating." },
      { front: "When can a private or commercial pilot log PIC time?", back: "Only when: (1) sole manipulator of the controls of an aircraft for which rated; (2) sole occupant; or (3) acting as PIC of an aircraft requiring more than one pilot under type certificate or regulation." },
      { front: "When is SIC time logged?", back: "When acting as SIC on an aircraft requiring more than one pilot by type certificate or regulation, while holding the appropriate category, class, and rating for the aircraft." },
      { front: "What must each instrument logbook entry include?", back: "The place and type of each instrument approach completed, and the name of the safety pilot for each simulated instrument flight." },
      { front: "What must a training time logbook entry include?", back: "Description of training given, length of lesson, and the authorized instructor's signature, certificate number, and certificate expiration date." },
      { front: "Who may request to see a pilot's logbook?", back: "The FAA, a member of the NTSB, or a local or state law enforcement officer." },
      { front: "What must a student pilot carry on all solo cross-country flights?", back: "Their logbook." },
      { front: "Under what two conditions may a pilot NOT act as PIC under 14 CFR 61.53?", back: "(1) While having a known medical problem that would prevent meeting current medical certificate requirements; (2) If no medical is required, if a medical condition would make operating the aircraft unsafe." },
      { front: "To serve as SIC of a multi-pilot airplane, what certificates must you hold?", back: "At least a private pilot certificate with appropriate category and class ratings, and an instrument rating if flying IFR." },
      { front: "What must an SIC complete within the past 12 calendar months before serving as SIC?", back: "(1) Become familiar with all airplane information and operations; (2) Perform and log: three takeoffs and landings to full stop as sole manipulator; engine-out procedures as PIC; and crew resource management training." },
      { front: "What are the flight review requirements to act as PIC?", back: "Must have satisfactorily accomplished a flight review, proficiency check, or practical test for a new certificate/rating within the preceding 24 calendar months — OR completed at least the basic phase of the FAA WINGS program." },
      { front: "What does a flight review consist of at minimum?", back: "1 hour of flight training and 1 hour of ground training with an authorized instructor, including current general operating/flight rules of Part 91 and appropriate maneuvers." },
      { front: "Is a student pilot required to complete a flight review?", back: "No — provided the student is undergoing training for a certificate and has a current solo flight endorsement." },
      { front: "What are the three phases of the FAA WINGS program?", back: "Basic, Advanced, and Master." },
      { front: "How many takeoffs and landings must a pilot make within the preceding 90 days to carry passengers?", back: "Three takeoffs and three landings in the same category, class, and type (if type rating required) as the aircraft to be used." },
      { front: "When must landings be to a full stop for the 90-day passenger currency requirement?", back: "When the airplane is a tailwheel (conventional gear) airplane." },
      { front: "What is the night currency requirement to carry passengers at night?", back: "Three takeoffs and three landings to a full stop at night, within the preceding 90 days, in the same category, class, and type. Night = 1 hour after sunset to 1 hour before sunrise." },
      { front: "What is the minimum age requirement for a student pilot certificate?", back: "16 years old." },
      { front: "What is the minimum age requirement for a private pilot certificate?", back: "17 years of age." },
      { front: "What knowledge test must a student pilot pass before solo?", back: "A test administered by the CFI on 14 CFR Parts 61 and 91, airspace rules and procedures for the solo airport, and operational characteristics of the airplane to be flown." },
      { front: "How many flight maneuvers must a student pilot receive training in before solo (single-engine airplane)?", back: "15 maneuvers, including preflight, taxiing, takeoffs/landings, climbs, turns, stalls, emergency procedures, ground reference maneuvers, slips, and go-arounds." },
      { front: "How long is a student pilot solo endorsement valid?", back: "90 days, after which another endorsement is required." },
      { front: "Under what conditions may a student pilot NOT act as PIC?", back: "When: (1) carrying passengers; (2) carrying property for hire; (3) operating for compensation; (4) in furtherance of a business; (5) on an international flight; (6) visibility below 3 SM day or below 5 SM night; (7) above an overcast; (8) violating CFI-imposed limitations." },
      { front: "What is the definition of 'cross-country flight' for student pilot solo purposes under 61.93?", back: "A flight beyond a radius of 25 NM from the point of departure." },
      { front: "May a student pilot make a solo landing at an airport other than the authorized departure airport?", back: "Not except in an emergency — unless specifically authorized by the CFI for practice takeoffs/landings within 25 NM." },
      { front: "What must a student pilot's logbook be endorsed for before each solo cross-country flight?", back: "The CFI must review preflight planning, certify the student is prepared for a safe flight, and record any CFI-imposed limitations." },
      { front: "What solo cross-country endorsement may be given for repeated flights to an airport less than 50 NM away?", back: "A blanket endorsement after dual cross-country flights in both directions with landings and takeoffs at the airports to be used." },
      { front: "What must a student pilot obtain to fly in Class B airspace or at a Class B primary airport?", back: "Ground and flight training specific to that Class B area from a CFI, plus a current 90-day logbook endorsement from that same CFI certifying competency." },
      { front: "What are the total flight time requirements for a private pilot certificate (single-engine airplane)?", back: "At least 40 hours total flight time." },
      { front: "How many hours of flight training from an authorized instructor are required for a private pilot (single-engine)?", back: "At least 20 hours." },
      { front: "What are the specific flight training hour requirements within the 20 hours for a private pilot certificate?", back: "(1) 3 hrs. cross-country; (2) 3 hrs. night including one cross-country of 100+ NM total and 10 takeoffs/10 landings to full stop; (3) 3 hrs. instrument training; (4) 3 hrs. in preparation for practical test within preceding 2 calendar months." },
      { front: "How many hours of solo flight time are required for a private pilot certificate (single-engine)?", back: "At least 10 hours, including 5 hrs. cross-country, one solo cross-country of at least 150 NM total with full-stop landings at minimum 3 points and one segment of at least 50 NM straight-line distance, and 3 solo takeoffs/landings to full stop at a controlled airport." },
      { front: "What is the maximum simulator/FTD time allowable for private pilot instrument training?", back: "A maximum of 2.5 hours of instruction may be accomplished in an FAA-approved flight simulator or FTD representing an airplane." },
      { front: "What Alaska night flight exception exists for private pilot candidates?", back: "A pilot who resides and trains in Alaska may be issued a certificate with 'Night flying prohibited' limitation, and must complete night training within 12 calendar months or the certificate becomes invalid." },
      { front: "What financial limitation applies to private pilots carrying passengers?", back: "A private pilot may not pay less than their equal (pro rata) share of operating expenses — limited to fuel, oil, airport expenditures, or rental fees." },
      { front: "Under what condition may a private pilot operate an aircraft on business while carrying passengers?", back: "The flight must be incidental to their other business or employment, and the pilot must not be paid as a pilot." },
      { front: "What are the requirements for a private pilot to act as PIC in a charitable airlift?", back: "(1) FAA Flight Standards office notified at least 7 days prior; (2) Flown from a public airport; (3) Pilot logged at least 500 hours; (4) No aerobatics or formation flight; (5) Standard airworthiness certificate; (6) Day-VFR only; (7) Non-stop, begins and ends at same airport within 25 NM radius." },
      { front: "May a private pilot act as aircraft salesperson and demonstrate a plane to a buyer?", back: "Yes, if the pilot is an aircraft salesperson with at least 200 hours of logged flight time." },
      { front: "May a private pilot be reimbursed for operating expenses related to search and rescue operations?", back: "Yes — for fuel, oil, airport expenditures, or rental fees only, if the operation is sanctioned and under direction of a local, state, or federal agency or an organization that conducts search/location operations." },
      { front: "May a private pilot be paid to act as SIC of a multi-pilot airplane?", back: "No — a private pilot may not be paid to act as SIC of an aircraft certificated for more than one required pilot." },
      { front: "Who is directly responsible for, and the final authority on, the operation of an airplane?", back: "The pilot in command." },
      { front: "Under what condition may a PIC deviate from FARs?", back: "In an emergency, to the extent needed to maintain the safety of the airplane and passengers." },
      { front: "What must a PIC do if they deviate from FARs in an emergency?", back: "They may be required to file a written report with the FAA." },
      { front: "Who is responsible for determining that an airplane is airworthy prior to each flight?", back: "The pilot in command." },
      { front: "What is the ARROW memory aid?", back: "Airworthiness certificate; Registration certificate; Radio station license (FCC, required for international flight only); Operating limitations; Weight and balance data." },
      { front: "Where may operating limitations for an airplane be found?", back: "In the current FAA-approved flight manual, approved manual material, markings, and placards, or any combination thereof." },
      { front: "What is the blood alcohol limit for acting as a crewmember of a civil airplane?", back: ".04% by weight or more is prohibited. Also prohibited if any alcohol consumed within the preceding 8 hours." },
      { front: "What must a crewmember do regarding drug testing when requested by law enforcement or FAA?", back: "Submit to a test to determine alcohol concentration in blood or breath." },
      { front: "May a pilot carry a person who is obviously under the influence of alcohol aboard an aircraft?", back: "Only in an emergency or if the person is a medical patient under proper care." },
      { front: "What drugs or substances may not be carried aboard an aircraft within the United States?", back: "Narcotic drugs, marihuana, and depressant or stimulant drugs or substances — if the pilot has knowledge they are aboard. (Exceptions for federally/state-authorized flights.)" },
      { front: "What is the ASRP and what is its primary objective?", back: "The Aviation Safety Reporting Program — a voluntary program to encourage information sharing on deficiencies and discrepancies in the aviation system. Primary objective: obtain information to evaluate and enhance the safety and efficiency of the system." },
      { front: "Who administers the ASRP and why?", back: "NASA acts as an independent third party — to ensure that no identifying information is released to the FAA." },
      { front: "What protections does an ASRP report provide from FAA enforcement?", back: "No civil penalty or suspension if: (1) violation was inadvertent and not deliberate; (2) not a criminal offense or showing lack of qualification; (3) no prior FAA enforcement violation in the preceding 5 years; (4) NASA ARC Form 277 was completed and submitted within 10 days of the violation." },
      { front: "What reports does the ASRP NOT protect against?", back: "Criminal offenses and accidents — these are not de-identified before referral." },
      { front: "What is the NASA form number for ASRP reports, and where can it be obtained?", back: "NASA ARC Form 277, available at https://asrs.arc.nasa.gov. Must be submitted within 10 days of the incident." },
      { front: "What must pilots familiarize themselves with before every flight?", back: "All available information concerning the flight — specifically runway lengths and takeoff/landing requirements for any flight; and for IFR or flights not near an airport: weather, fuel requirements, alternatives, and known traffic delays." },
      { front: "When must shoulder harnesses be worn by flight crewmembers?", back: "During takeoff and landing, if shoulder harnesses are available — unless wearing one would prevent the crewmember from performing required duties." },
      { front: "Who must wear safety belts during taxiing, takeoff, and landing?", back: "All passengers (occupants) of the airplane." },
      { front: "What exception exists for passenger belt requirements under 14 CFR 91.107?", back: "A passenger who has not reached their second birthday may be held by an adult. Sport parachutists may use the aircraft floor as a seat (but still must use safety belts)." },
      { front: "What is required to conduct simulated instrument flight?", back: "(1) A safety pilot with at least a private pilot certificate with appropriate category/class ratings at the other controls — with a valid medical certificate (required crewmember); (2) Safety pilot must have adequate visibility; (3) Dual controls or acceptable throwover control must be present." },
      { front: "Which aircraft has the right-of-way over all others?", back: "Aircraft in distress." },
      { front: "When two aircraft are approaching head-on, what must each pilot do?", back: "Turn to the right, regardless of category." },
      { front: "What is the right-of-way order when aircraft of different categories are converging?", back: "Balloons > Gliders > Airships > Airplanes or Rotorcraft (least maneuverable has right-of-way)." },
      { front: "When two aircraft of the same category are converging at the same altitude (not head-on), which has right-of-way?", back: "The aircraft to the other's right has the right-of-way." },
      { front: "When multiple aircraft are approaching to land, which has right-of-way?", back: "The aircraft at the lower altitude — but this must not be used to cut in front of or overtake another aircraft." },
      { front: "What type of aircraft has right-of-way over all engine-driven aircraft?", back: "An aircraft towing or refueling another aircraft." },
      { front: "What is the speed limit below 10,000 ft. MSL?", back: "250 kt. (288 MPH)." },
      { front: "What is the speed limit within Class B airspace?", back: "250 kt." },
      { front: "What is the speed limit when flying UNDER Class B airspace or in VFR corridors through Class B?", back: "200 kt. (230 MPH)." },
      { front: "What is the speed limit at or below 2,500 ft. AGL within 4 NM of the primary airport of Class C or D airspace?", back: "200 kt. (230 MPH)." },
      { front: "What is the minimum altitude over congested areas?", back: "1,000 ft. above the highest obstacle within a horizontal radius of 2,000 ft. of the airplane." },
      { front: "What is the minimum altitude over other than congested areas?", back: "500 ft. AGL. Over open water or sparsely populated areas, the aircraft may not be operated closer than 500 ft. to any person, vessel, vehicle, or structure." },
      { front: "What is the altitude requirement in ALL areas (emergency landing provision)?", back: "Altitude must be sufficient to permit an emergency landing without undue hazard to persons or property on the surface if a power unit fails." },
      { front: "What should the altimeter be set to prior to takeoff?", back: "The current local altimeter setting. If unavailable: departure airport elevation, or current reported altimeter within 100 NM, or an appropriate available station." },
      { front: "What altimeter setting is required at or above 18,000 ft. MSL?", back: "29.92 in. Hg — to guarantee vertical separation." },
      { front: "Under what condition may a pilot deviate from an ATC clearance?", back: "Only in an emergency — or if an amended clearance is obtained, or in response to a TCAS resolution advisory. If a rule deviation will occur, the pilot shall immediately advise ATC." },
      { front: "If a pilot receives ATC priority in an emergency, what must they do if requested?", back: "File a detailed report within 48 hours to the chief of that ATC facility, even if no rule was violated." },
      { front: "What does a STEADY GREEN light signal mean to an aircraft on the ground?", back: "Cleared for takeoff." },
      { front: "What does a STEADY GREEN light signal mean to an aircraft in flight?", back: "Cleared to land." },
      { front: "What does a FLASHING GREEN light signal mean to an aircraft on the ground?", back: "Cleared for taxi." },
      { front: "What does a FLASHING GREEN light signal mean to an aircraft in flight?", back: "Return for landing (to be followed by a steady green at the proper time)." },
      { front: "What does a STEADY RED light signal mean to an aircraft on the ground?", back: "Stop." },
      { front: "What does a STEADY RED light signal mean to an aircraft in flight?", back: "Give way to other aircraft and continue circling." },
      { front: "What does a FLASHING RED light signal mean to an aircraft on the ground?", back: "Taxi clear of the runway in use." },
      { front: "What does a FLASHING RED light signal mean to an aircraft in flight?", back: "Airport unsafe — do not land." },
      { front: "What does a FLASHING WHITE light signal mean to an aircraft on the ground?", back: "Return to starting point on airport." },
      { front: "What does ALTERNATING RED AND GREEN mean to any aircraft?", back: "Exercise extreme caution." },
      { front: "What does a FLASHING WHITE signal mean to vehicles and personnel on the ground?", back: "Return to starting point on airport." },
      { front: "What traffic pattern turn direction is standard for Class G airports without a control tower?", back: "All turns to the left, unless the airport displays light signals or markings indicating right turns." },
      { front: "When must two-way radio communication be established for a controlled airport?", back: "Prior to 4 NM from the airport, up to and including 2,500 ft. AGL." },
      { front: "What may a pilot do if radio fails in flight approaching a towered airport (VFR conditions)?", back: "Operate and land if weather is at or above basic VFR minimums, visual contact with the tower is maintained, and a clearance to land is received (e.g., light signal)." },
      { front: "When operating in Class D airspace, when must two-way communication be established?", back: "Prior to entering and while operating within Class D airspace." },
      { front: "When must radio communication be established in Class C airspace?", back: "Before entering Class C airspace, and maintained while within it." },
      { front: "What transponder equipment is required in Class C airspace?", back: "A transponder with altitude encoding (Mode C)." },
      { front: "What is required to operate in Class B airspace?", back: "An ATC clearance, and the pilot must hold at least a private pilot certificate (or a student/sport/recreational pilot with specific authorizations)." },
      { front: "What equipment is required to operate in Class B airspace?", back: "Operative two-way radio communications and a Mode C transponder." },
      { front: "Can a student pilot land at any Class B primary airport?", back: "Certain Class B primary airports (the busiest) require at least a private pilot certificate — student pilots are completely prohibited at those specific airports." },
      { front: "What are the requirements to operate in Class A airspace?", back: "(1) ATC clearance prior to entry; (2) Two-way communication radios with maintained ATC contact; (3) Altitude encoding transponder. Must be under IFR." },
      { front: "How far in advance must exceptions to Class A airspace requirements be requested?", back: "At least 4 days before the proposed flight (except transponder malfunction, which can receive immediate approval)." },
      { front: "What are the three purposes for which the FAA may issue a NOTAM for temporary flight restrictions?", back: "(1) To protect persons/property from a hazard associated with a surface incident; (2) To provide a safe environment for disaster relief aircraft; (3) To be observed over events generating high public interest." },
      { front: "How far in advance must a NOTAM for TFRs near aerial demonstrations be issued?", back: "At least 30 days in advance (unless the FAA finds good cause for a shorter period, which must be explained in the NOTAM)." },
      { front: "What is the normal radius of a TFR for an aerial demonstration?", back: "5 NM radius from the center of the demonstration." },
      { front: "What is the normal radius of a TFR for a major sporting event?", back: "3 NM radius from the center of the event, up to 2,500 ft. above the surface." },
      { front: "How many passenger-carrying events per calendar year are pilots and sponsors limited to under 91.146?", back: "No more than four events per calendar year." },
      { front: "What are the VFR fuel requirements for day flight?", back: "Sufficient fuel to fly to the first point of intended landing plus 30 minutes at normal cruise speed." },
      { front: "What are the VFR fuel requirements for night flight?", back: "Sufficient fuel to fly to the first point of intended landing plus 45 minutes at normal cruise speed." },
      { front: "What VFR cruising altitude rule applies above 3,000 ft. AGL and below 18,000 ft. MSL?", back: "Odd thousands + 500 ft. for magnetic courses 0°–179° (e.g., 3,500; 5,500); even thousands + 500 ft. for magnetic courses 180°–359° (e.g., 4,500; 6,500). Memory aid: 'East is odd; west is even odder.'" },
      { front: "What is the VFR cruising altitude rule based on — magnetic course or magnetic heading?", back: "Magnetic course." },
      { front: "What documents are required in a civil aircraft under 14 CFR 91.203?", back: "(1) Current airworthiness certificate posted near entrance; (2) Registration certificate. Also required: AFM/POH accessible to pilot; weight and balance information. (ARROW mnemonic)" },
      { front: "When is a radio station license (ARROW 'R') required?", back: "Only when flying outside U.S. airspace (FCC requirement, not FAA). A restricted radiotelephone operator permit is also required for such flights." },
      { front: "List the required instruments and equipment for VFR day flight.", back: "Airspeed indicator; altimeter; magnetic direction indicator; tachometer (each engine); oil pressure gauge (pressure system engines); temp gauge (liquid-cooled engines); oil temp gauge (air-cooled engines); manifold pressure gauge (altitude engines); fuel gauge (each tank); landing gear position indicator (retractable); anti-collision light; flotation gear (if for hire over water beyond glide distance); approved safety belt and shoulder harness." },
      { front: "What additional equipment is required for VFR night flight beyond day VFR equipment?", back: "Approved position lights; approved anti-collision light; landing light (if operated for hire); adequate source of electrical power; fuses (one spare set or three of each kind required)." },
      { front: "How often must an ELT be inspected?", back: "Every 12 calendar months for proper installation, battery corrosion, operation of controls and crash sensor, and sufficient signal radiated from the antenna." },
      { front: "When must ELT batteries be replaced or recharged?", back: "After 1 cumulative hour of use OR after 50% of their useful life expires." },
      { front: "When may an ELT be tested?", back: "On the ground only, during the first 5 minutes after the hour. No airborne checks are allowed." },
      { front: "How long may an aircraft be operated after an ELT is removed?", back: "No more than 90 days after the ELT is initially removed." },
      { front: "What marking requirement applies to ELT batteries?", back: "The expiration date must be legibly marked on the outside of the transmitter." },
      { front: "When must aircraft position (navigation) lights be on?", back: "During the period from sunset to sunrise (on the ground or in the air), except in Alaska." },
      { front: "When must anti-collision lights be used?", back: "At all times if the airplane is so equipped — though the PIC may turn them off if it is in the interest of safety given operating conditions." },
      { front: "At what cabin altitude must all occupants be provided supplemental oxygen?", back: "Above 15,000 ft. MSL." },
      { front: "What is the oxygen rule for pilots and crewmembers at 12,500–14,000 ft. MSL?", back: "They may not operate for more than 30 continuous minutes at cabin altitudes above 12,500 ft. MSL up to and including 14,000 ft. MSL without supplemental oxygen." },
      { front: "When must pilots and crewmembers use supplemental oxygen?", back: "At cabin pressure altitudes above 14,000 ft. MSL." },
      { front: "Where is Mode C transponder equipment required?", back: "(1) All Class A, B, and C airspace; (2) Within 30 NM of Class B primary airport surface to 10,000 ft. MSL; (3) Above 10,000 ft. MSL (except at or below 2,500 ft. AGL); (4) Within 10 NM of certain specified airports (except below 1,200 ft. AGL outside surface area boundaries)." },
      { front: "If equipped with a Mode C transponder maintained per 91.413, when must it be on?", back: "At all times in all controlled airspace." },
      { front: "What transponder test interval is required by 14 CFR 91.413?", back: "Tested and inspected within the preceding 24 calendar months." },
      { front: "After what date is ADS-B Out required?", back: "After January 1, 2020." },
      { front: "In what airspace is ADS-B Out required?", back: "Class A, B, and C airspace; within 30 NM of Appendix D airports up to 10,000 ft. MSL; Class E airspace at/above 10,000 ft. MSL in the 48 contiguous states (excluding airspace at/below 2,500 ft. AGL); Class E at/above 3,000 ft. MSL over the Gulf of America within 12 NM of the U.S. coast." },
      { front: "Are gliders and balloons required to have ADS-B Out?", back: "No — aircraft not originally certificated with an electrical system (or not subsequently certified with one) are exempt." },
      { front: "When is aerobatic flight prohibited?", back: "When visibility is less than 3 SM; below 1,500 ft. AGL; within the lateral boundaries of surface areas of Class B, C, D, or E airspace designated for an airport; within 4 NM of any federal airway centerline; over congested areas or open-air assemblies of people." },
      { front: "How often must parachutes composed exclusively of synthetic fibers (nylon/rayon) be repacked?", back: "Within the preceding 180 days." },
      { front: "How often must parachutes containing silk or other natural fibers be repacked?", back: "Within the preceding 60 days." },
      { front: "What intentional maneuver limits apply unless ALL occupants wear approved parachutes?", back: "No bank exceeding 60° relative to the horizon; no nose-up or nose-down attitude exceeding 30° relative to the horizon." },
      { front: "Who is primarily responsible for maintaining an aircraft in airworthy condition?", back: "The owner or operator of the aircraft (and thus also the PIC)." },
      { front: "How long is an annual inspection valid?", back: "Through the last day of the 12th calendar month after the previous annual inspection." },
      { front: "Who must perform an annual inspection?", back: "A certified mechanic (A&P) who also holds an inspection authorization (IA)." },
      { front: "By how many hours may a 100-hour inspection be exceeded to reach an inspection facility?", back: "No more than 10 hours." },
      { front: "If a 100-hour inspection is done at 105 hours (due to the 10-hour overrun allowance), when is the next inspection due?", back: "In 95 hours (next inspection is always due 200 hours from the prior inspection, not 100 hours from when it was actually performed)." },
      { front: "What must passenger briefings include per 14 CFR 91.519?", back: "(1) Smoking; (2) Use of safety belts and shoulder harnesses; (3) Location and means of opening passenger entry door and emergency exits; (4) Location of survival equipment; (5) Ditching procedures and use of flotation equipment; (6) Normal and emergency use of oxygen equipment if installed." },
      { front: "What is an 'aircraft accident' under NTSB Part 830?", back: "An occurrence between the time any person boards with intent of flight until all have disembarked, in which any person suffers death or serious injury, or the aircraft receives substantial damage." },
      { front: "What is a 'fatal injury' under NTSB Part 830?", back: "An injury resulting in death within 30 days of the accident." },
      { front: "What is an 'incident' under NTSB Part 830?", back: "An occurrence other than an accident, associated with aircraft operation, that affects or could affect the safety of operations." },
      { front: "What constitutes 'serious injury' under NTSB Part 830?", back: "Hospitalization for more than 48 hrs (commencing within 7 days); fracture of any bone (except simple fractures of fingers, toes, or nose); severe hemorrhages or nerve/muscle/tendon damage; injury to any internal organ; second- or third-degree burns or any burns affecting more than 5% of body surface." },
      { front: "What is 'substantial damage' under NTSB Part 830?", back: "Damage or failure that adversely affects structural strength, performance, or flight characteristics and would normally require major repair or replacement." },
      { front: "What types of damage are NOT considered 'substantial damage' under NTSB 830?", back: "Engine failure; damage limited to an engine; bent fairings or cowling; dented skin; small puncture holes in skin or fabric; ground damage to rotor or propeller blades; damage to landing gear, wheels, tires, flaps, engine accessories, brakes, or wingtips." },
      { front: "What is an 'unmanned aircraft accident' under NTSB Part 830?", back: "An occurrence from system activation to deactivation in which any person suffers death or serious injury, OR the UAS has a max gross takeoff weight of 300 lb. or greater and sustains substantial damage." },
      { front: "What events require IMMEDIATE notification to the nearest NTSB office?", back: "(1) Aircraft overdue believed in accident; (2) Accident occurrence; (3) Flight control system malfunction; (4) Crewmember incapacitation; (5) Internal turbine engine component failure with debris escape (non-exhaust path); (6) In-flight fire; (7) Aircraft collision in flight; (8) Property damage exceeding $25,000; (9) Release of propeller blade; (10) Loss of 50%+ of glass panel displays; (11) ACAS resolution advisory under IFR or in Class A; (12) Helicopter tail/main rotor blade damage requiring major repair; (13) Air carrier landing on taxiway/wrong runway or runway incursion requiring immediate corrective action." },
      { front: "What is the property damage threshold requiring immediate NTSB notification?", back: "Damage to property other than the aircraft estimated to exceed $25,000 for repair (materials and labor) or fair market value in case of total loss, whichever is less." },
      { front: "What information must be provided in an NTSB immediate notification?", back: "Aircraft type, nationality, and registration; owner and operator names; PIC name; date and time of accident; last departure point and intended landing; position relative to a geographical point; persons aboard, killed, and seriously injured; nature of accident, weather, extent of damage; description of any dangerous articles carried." },
      { front: "Who is responsible for preserving aircraft wreckage, cargo, mail, and records?", back: "The operator of the aircraft — until the NTSB takes custody." },
      { front: "Under what three conditions may aircraft wreckage be disturbed before the NTSB takes custody?", back: "(1) To remove persons injured or trapped; (2) To protect the wreckage from further damage; (3) To protect the public from injury." },
      { front: "Within how many days after an accident must the operator file an NTSB report?", back: "Within 10 days after an accident (Form NTSB 6120.1/2)." },
      { front: "When must an NTSB report be filed for an overdue aircraft that is still missing?", back: "Within 7 days." },
      { front: "Where must an NTSB accident report be filed?", back: "At the nearest NTSB office." },
      { front: "What must each crewmember do regarding accident/incident reports?", back: "As soon as physically able, attach a statement concerning the facts, conditions, and circumstances relating to the accident or incident." },
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
