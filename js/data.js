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
      { front: "The magnetic compass is:", back: "The ONLY self-contained direction-seeking instrument in the airplane. Used primarily to set the heading indicator and verify HI accuracy in flight." },
      { front: "Magnetic compass float chamber contents:", back: "Sealed chamber filled with WHITE KEROSENE. Decreases oscillations, lubricates the pivot, and provides buoyancy to take weight off the pivot." },
      { front: "Maximum compass card tilt angle:", back: "Up to 18°. Beyond this, the float assembly hits its mechanical limits." },
      { front: "Compass card markings:", back: "Cardinal letters (N, E, S, W). Each 30° interval represented by a number with the last zero omitted (e.g., 30° = 3, 300° = 30). Graduated for each 5° between numbers." },
      { front: "What is compass deviation?", back: "Difference between the heading indicated by the magnetic compass and the airplane's actual magnetic heading. Caused by LOCAL magnetic fields in the airplane (wiring, structure, magnetized parts). Depends on heading and electrical equipment in use." },
      { front: "Where are remaining deviation errors recorded?", back: "On the COMPASS CORRECTION CARD (compass deviation card) mounted in the airplane near the magnetic compass. Used to correct headings for accurate compass steering." },
      { front: "When is the magnetic compass considered accurate in flight?",  back: "ONLY during straight-and-level flight at a CONSTANT AIRSPEED. Turns, accelerations, and decelerations all cause errors." },
      { front: "What is magnetic dip error?", back: "Compass needles tend to point DOWN as well as toward the magnetic pole. Greatest at the poles, ZERO at the magnetic equator. Causes acceleration and turning errors due to the pendulous compass card." },
      { front: "Acceleration/deceleration error — ANDS:", back: "On EAST or WEST headings (Northern Hemisphere): Accelerate → compass indicates turn toward NORTH. Decelerate → compass indicates turn toward SOUTH. Does NOT occur on N or S headings." },
      { front: "Compass northerly turning error (NH):", back: "When turning FROM a north heading: compass LAGS (or initially indicates opposite). When turning TO a northerly heading: compass LAGS — roll out BEFORE reaching desired heading." },
      { front: "Compass southerly turning error (NH):", back: "When turning FROM a south heading: compass LEADS (shows MORE turn than actual). When turning TO a southerly heading: compass LEADS — roll out AFTER passing desired heading." },
      { front: "Turning correction rule of thumb (turning to N or S):", back: "Stop turn 15° plus HALF THE LATITUDE before/after the target heading. At 40° latitude: 15 + 20 = 35° lead/lag. Lead for North; Lag (overshoot) for South." },
      { front: "UNOS memory aid:", back: "Undershoot North, Overshoot South. When turning TO a northern heading, stop turn EARLY. When turning TO a southern heading, stop turn LATE (after passing)." },
      { front: "Are compass turning errors present on E or W headings?", back: "NO. Turning errors only become evident when turning TO/FROM north or south. Compass works normally entering a turn on E or W headings." },
      { front: "Magnetic variation:", back: "Angular difference between TRUE NORTH and MAGNETIC NORTH. Varies with geographic location. The compass points to magnetic north, but charts use true north." },
      { front: "Isogonic lines vs agonic line:", back: "ISOGONIC lines connect points of EQUAL magnetic variation (plotted in degrees east or west on aeronautical charts). The AGONIC line connects points of ZERO variation." },
      { front: "Pitot-static system supplies pressure to which three instruments?", back: "1) ALTIMETER (static only). 2) Vertical Speed Indicator/VSI (static only). 3) AIRSPEED INDICATOR (both pitot AND static)." },
      { front: "Static pressure source location:", back: "Usually from static line attached to vent(s) mounted FLUSH with the side of the fuselage. Some airplanes have static source on the back of the pitot tube." },
      { front: "Pitot pressure (ram/impact/total pressure) source:", back: "Pitot tube — normally mounted on or beneath the LEADING EDGE of the LEFT WING, aligned with the relative wind. Provides ram pressure for the airspeed indicator ONLY." },
      { front: "Effect of clogged pitot tube only (static clear):", back: "Only the airspeed indicator becomes inoperative/inaccurate. Altimeter and VSI continue to function." },
      { front: "Effect of clogged static system, pitot clear:", back: "ASI continues to function but inaccurately. Reads LOWER than actual when ABOVE the altitude where blockage occurred (trapped static is higher pressure). Reads HIGHER when BELOW that altitude." },
      { front: "Alternate static source effect on instruments:", back: "Alternate source typically vented inside cabin (lower pressure than outside due to venturi effect). Altimeter reads HIGHER than actual. VSI initially indicates a CLIMB, then levels. ASI reads GREATER than actual." },
      { front: "What is dynamic pressure (in airspeed measurement)?", back: "The DIFFERENCE between total pressure (from pitot) and static pressure. The ASI is a differential air pressure instrument measuring this difference. Pitot connects to one side of a diaphragm, static to the other." },
      { front: "ASI white arc — what does it represent?", back: "FLAP OPERATING RANGE. Lower limit = VS0 (power-off stall speed, landing config). Upper limit = VFE (max flaps-extended speed)." },
      { front: "ASI green arc — what does it represent?", back: "NORMAL OPERATING RANGE. Lower limit = VS1 (power-off stall, clean configuration). Upper limit = VNO (max structural cruising speed)." },
      { front: "ASI yellow arc — what does it represent?", back: "CAUTION RANGE. From VNO to VNE. Operate at these speeds ONLY in smooth air with caution." },
      { front: "ASI red line — what does it represent?", back: "VNE — Never-Exceed Speed. Maximum speed at which airplane can be operated safely. Never exceed intentionally — risk of structural damage or failure." },
      { front: "VS0 definition:", back: "Power-off stalling speed (minimum steady flight speed) in the LANDING CONFIGURATION — flaps and landing gear extended, at maximum landing weight." },
      { front: "VS1 definition:", back: "Power-off stalling speed (or minimum steady flight speed) obtained in a SPECIFIED CONFIGURATION — typically with flaps and gear RETRACTED at max takeoff weight." },
      { front: "VFE definition:", back: "Maximum FLAPS-EXTENDED speed. Upper limit of the white arc. Exceeding may cause severe strain or structural failure of the flaps." },
      { front: "VNO definition:", back: "Maximum structural CRUISING speed. Upper limit of green arc. Should not be exceeded except in smooth air, with caution." },
      { front: "VNE definition:", back: "Never-exceed speed. Red radial line on the ASI. Operating above this can cause structural damage or failure." },
      { front: "VA — design maneuvering speed:", back: "Speed at or below which a single full deflection of one flight control (one axis only) in smooth air will NOT damage the airplane. Used in rough air. Varies with GROSS WEIGHT. Maximum speed at which the airplane may be stalled safely." },
      { front: "VG definition:", back: "Best GLIDE speed — provides best L/D ratio (L/D MAX) angle of attack in a power-off glide. Aircraft will glide the farthest at this speed." },
      { front: "VH definition:", back: "Maximum continuous POWER speed." },
      { front: "VLE definition:", back: "Maximum LANDING GEAR EXTENDED speed. Maximum airspeed at which the airplane can be flown with the landing gear extended." },
      { front: "VLO definition:", back: "Maximum LANDING GEAR OPERATING speed. Maximum speed for EXTENDING or RETRACTING the landing gear." },
      { front: "VR definition:", back: "Rotation speed. The speed at which the pilot rotates the aircraft for takeoff." },
      { front: "VX definition:", back: "Best ANGLE of climb speed. Provides most ALTITUDE per DISTANCE — used for short-field takeoffs to clear obstacles." },
      { front: "VY definition:", back: "Best RATE of climb speed. Provides most ALTITUDE per TIME — used to gain altitude quickly." },
      { front: "Indicated airspeed (IAS):", back: "Direct ASI reading. NOT corrected for air density, installation, or instrument errors. Used by POH/AFM, FARs, and ATC for speed limitations." },
      { front: "Calibrated airspeed (CAS):", back: "IAS CORRECTED for installation (position) and instrument errors. Static port disturbance and pitot tube misalignment at varying AOA cause errors that CAS corrects." },
      { front: "True airspeed (TAS):", back: "CAS corrected for density altitude — the actual speed through the air. For a given TAS, IAS decreases as altitude increases. For a given IAS, TAS increases with altitude." },
      { front: "Rule of thumb for approximating TAS:", back: "Add 2% to IAS for each 1,000 ft of altitude. EXAMPLE: 140 kt IAS at 6,000 ft → 140 × 1.12 = ~157 kt TAS." },
      { front: "Altimeter principle of operation:", back: "Aneroid (mechanical) barometer measuring atmospheric pressure. Uses STATIC pressure. A stack of aneroid wafers expands/contracts with pressure changes, driving pointers through a gear train." },
      { front: "Altimeter — three pointers:", back: "1) 10,000-ft (short needle, often with triangular tip). 2) 1,000-ft (medium needle). 3) 100-ft (long needle)." },
      { front: "What is the Kollsman window?", back: "The small window on the altimeter face displaying the barometric pressure SETTING (in. Hg). Adjusted with the setting knob on the lower-LEFT corner of the instrument." },
      { front: "ISA values at sea level:", back: "Temperature: 15°C (59°F). Pressure: 29.92\" Hg (1,013.2 hPa)." },
      { front: "Absolute altitude:", back: "Height of the aircraft ABOVE THE TERRAIN. Expressed in feet AGL (above ground level)." },
      { front: "True altitude:", back: "Actual height ABOVE MEAN SEA LEVEL (MSL). Used for airport, terrain, and obstacle elevations on aeronautical charts. Not affected by atmospheric conditions." },
      { front: "Indicated altitude:", back: "Read directly from the altimeter with the local altimeter setting. Approximates true altitude. Used by all aircraft BELOW 18,000 ft MSL." },
      { front: "Pressure altitude:", back: "Height above the standard datum plane of 29.92\" Hg. The indicated altitude when altimeter is set to 29.92. Equals true altitude under standard atmospheric conditions. Used AT OR ABOVE 18,000 ft MSL (FL180+)." },
      { front: "Density altitude:", back: "Pressure altitude corrected for NONSTANDARD temperature. Equals pressure altitude when temperature is standard. Higher than PA when warmer than standard; lower when colder." },
      { front: "What is a Flight Level (FL)?", back: "Altitude at or above 18,000 ft MSL with altimeter set to 29.92. Remove last two zeros from altitude → FL. 19,000 ft = FL190. 35,000 ft = FL350." },
      { front: "Indicated altitude rate of change with altimeter setting:", back: "Approximately 1,000 ft per 1\" Hg change. EXAMPLE: Changing setting from 29.15 to 29.85 = 0.70 in increase → indicated altitude rises by ~700 ft." },
      { front: "FAR altimeter setting rules below 18,000 ft MSL:", back: "Use the current altimeter setting from a station along the route of flight WITHIN 100 NM. If none available, use an appropriate station. Without radio: set to departure airport elevation." },
      { front: "Altimeter setting at/above 18,000 ft MSL:", back: "Set to 29.92\" Hg. All aircraft in this airspace fly Flight Levels using the same reference." },
      { front: "Altimeter error — warm/cold temperature memory aid:", back: "'From HIGH to LOW (temp or pressure), look out BELOW' — actual altitude is LOWER than indicated, terrain closer. 'Low to high, clear the sky.' Altimeters do NOT correct for temperature." },
      { front: "Flying from high pressure to low pressure without resetting:", back: "Actual altitude will be LOWER than indicated. DANGEROUS for terrain clearance — 'look out below.'" },
      { front: "Flying from low to high pressure without resetting:", back: "Actual altitude will be HIGHER than indicated. Safer for terrain but may bust an assigned altitude." },
      { front: "High mountainous terrain — possible altimeter error:", back: "Certain atmospheric conditions can cause the altimeter to indicate 1,000 ft OR MORE higher than the actual altitude. Allow generous altitude margins; watch for downdrafts in high winds." },
      { front: "Two fundamental gyroscopic properties:", back: "1) RIGIDITY in space — gyro maintains its plane of rotation (Newton's 1st law). 2) PRECESSION — applied force creates reaction 90° AHEAD in direction of rotation." },
      { front: "Gyroscopic instrument power sources:", back: "Vacuum system: typically powers Attitude Indicator (AI) and Heading Indicator (HI). Electrical system: typically powers the Turn Coordinator/Turn Indicator." },
      { front: "Which gyroscopic property does each instrument use?", back: "AI and HI use RIGIDITY in space (universally mounted). Turn Coordinator uses PRECESSION." },
      { front: "Attitude Indicator (AI) operation:", back: "Gyro mounted on horizontal plane uses rigidity in space. Horizon bar remains in horizontal plane as airplane pitches and banks. Most realistic instrument; reference often in restricted visibility." },
      { front: "AI pitch and bank limits:", back: "Typical limits: 60° to 70° pitch; 100° to 110° bank. Exceeding these causes the AI to 'tumble' or 'spill'." },
      { front: "AI 'PULL TO CAGE' function:", back: "Locks gimbal bearings. Prevents gyro damage during unusual attitudes. Can also re-erect the gyro/counter precession in straight-and-level flight. Caged AI shows wings-level, nose-on-horizon." },
      { front: "Turn Coordinator (TC) — what it shows:", back: "Indicates RATE and DIRECTION of turn AND rate of ROLL (gimbal axis tilted up 30°). Inclinometer shows quality of turn (coordination). Does NOT directly show bank angle." },
      { front: "Standard-rate turn:", back: "3° per second. Completes a 360° turn in 2 minutes. Indicated when the TC wing tip is aligned with the standard rate marker." },
      { front: "Inclinometer (ball) — interpretation:", back: "Ball centered = coordinated. Ball to OUTSIDE of turn = SKID (too much rudder; too steep rate of turn for bank). Ball to INSIDE of turn = SLIP (too little rudder; not enough rate of turn for bank). Rule: 'Step on the ball.'" },
      { front: "Correcting a SKID:", back: "Rate of turn is too great for the angle of bank. Either increase bank, decrease rudder pressure to center the ball, or both." },
      { front: "Correcting a SLIP:", back: "Rate of turn too slow for the angle of bank. Either decrease bank, apply more rudder, or both." },
      { front: "Turn-and-Slip Indicator (T&SI) — vs TC:", back: "T&SI uses a NEEDLE (no miniature airplane). Indicates only RATE OF TURN about vertical (yaw) axis — NOT rate of roll like the TC." },
      { front: "Heading Indicator (HI) operation:", back: "Uses RIGIDITY in space. Rotor spins in vertical plane with compass card fixed to it. Card remains rigid as airplane revolves around vertical axis. NOT affected by compass errors." },
      { front: "HI realignment interval:", back: "Every 15 MINUTES during straight-and-level flight (due to precession from bearing friction or improper vacuum pressure)." },
      { front: "Typical HI pitch/bank limits:", back: "Approximately 55° pitch and 55° bank. Exceeded → instrument tumbles/spills; heading card spins rapidly. Some HIs are designed not to tumble." },
      { front: "Vacuum system components:", back: "Engine-driven vacuum pump, vacuum relief valve, air filter, tubing and manifolds. Suction gauge on instrument panel shows vacuum level. Some have low-vacuum warning light." },
      { front: "Glass panel: PFD vs MFD:", back: "PFD (Primary Flight Display): integrates all flight instruments critical to safe flight. MFD (Multi-Function Display): adds moving map, weather, system status, traffic/terrain warnings, fuel mgmt." },
      { front: "Air Data Computer (ADC):", back: "Receives pitot and static inputs, computes the pressure differential, and generates airspeed, altitude, and vertical speed for display on the PFD." },
      { front: "Attitude and Heading Reference System (AHRS):", back: "Replaces free-spinning mechanical gyros with SOLID-STATE LASER systems. No tumbling, can fly any attitude. Sends attitude information to PFD. Heading derived from a MAGNETOMETER." },
      { front: "Four basic functions of engine oil:", back: "1) LUBRICATE — maintain film between moving surfaces. 2) SEAL — between cylinder walls and piston rings; prevents combustion gas blow-by. 3) CLEAN — carries off metal, carbon, contaminants. 4) COOL — carries heat away from hot engine parts (most important)." },
      { front: "Causes of excessive engine temperatures:", back: "1) Operating with too MUCH power. 2) Climbing too STEEPLY (too low airspeed) in hot weather. 3) Using LOWER octane fuel than specified. 4) Operating too LEAN. 5) Oil level TOO LOW." },
      { front: "Effects of excessively high engine temperature:", back: "Loss of power, excessive oil consumption, accelerated internal wear. Can lead to detonation, scoring of cylinder walls, damaged pistons/rings, burned/warped valves." },
      { front: "Oil pressure gauge — significance of low oil pressure:", back: "Low oil pressure indicates mechanical problem or inadequate oil supply. Requires IMMEDIATE LANDING." },
      { front: "What is the Cylinder Head Temperature (CHT) gauge?", back: "Provides DIRECT and IMMEDIATE indication of engine temperature changes. Red line = max allowable temp. Yellow arc = caution. To reduce CHT: open cowl flaps, increase airspeed, enrich mixture, or reduce power." },
      { front: "What are cowl flaps?", back: "Hinged covers over engine cooling air outlet(s). OPEN cowl flaps = more cooling (low-airspeed/high-power ops like takeoff/climb). CLOSED = less cooling (cruise/descent). Restricting flow INCREASES engine temp." },
      { front: "Constant-speed propeller — what is the propeller control?", back: "Controls the propeller GOVERNOR, which regulates BLADE PITCH ANGLE to maintain a CONSTANT RPM regardless of power changes. Registered on the TACHOMETER." },
      { front: "Constant-speed propeller — what does the throttle control?", back: "Controls POWER OUTPUT (manifold pressure). Registered on the MANIFOLD PRESSURE (MP) gauge in inches of mercury (in. Hg)." },
      { front: "Manifold Pressure (MP) gauge:", back: "Simple barometer measuring air pressure in the engine intake manifold in inches of mercury. Higher MP = more power being developed by the engine." },
      { front: "Common rule: high MP + low RPM:", back: "AVOID this combination. Can over-stress cylinders. Always reduce MP before reducing RPM, and increase RPM before increasing MP. Consult POH/AFM for approved combinations." },
      { front: "Propeller pitch settings on takeoff vs cruise:", back: "Takeoff: LOW pitch, HIGH RPM — maximum power. Cruise: HIGHER pitch, LOWER RPM — propeller takes a 'larger bite' for efficiency at speed." },
      { front: "Propeller slip definition:", back: "Difference between GEOMETRIC pitch (theoretical advance in one revolution if rotated in a solid) and EFFECTIVE pitch (actual forward distance per revolution)." },
      { front: "Propeller efficiency range:", back: "50% to 87%, depending on slippage. Most efficient at blade angles of attack between 1° and 4°." },
      { front: "Why is a propeller blade twisted?", back: "Outer parts of the blade travel FASTER than the hub (rotating around central point). Without twist, the outer portion would stall while the inner could have negative AOA. Twist maintains constant AOA along length." },
      { front: "Fixed-pitch propeller — how is RPM controlled?", back: "By the THROTTLE only (direct relationship to RPM, registered on the tachometer). Designed for max efficiency at one specific RPM/airspeed combination." },
      { front: "Magneto — what it does:", back: "Self-contained, engine-driven unit using a rotating magnet inside a coil to produce electrical current. Steps up voltage to fire spark plugs. Completely SEPARATE from the aircraft electrical system." },
      { front: "Ignition switch — five positions:", back: "From left to right: OFF, R (right mag only), L (left mag only), BOTH (both mags), START (activates electric starter)." },
      { front: "Why use BOTH magnetos in flight?", back: "(1) Both spark plugs in each cylinder fire → more even, complete combustion → improved performance. (2) Redundancy — if one mag fails, engine continues on the other." },
      { front: "Hazard of broken/grounded magneto wire:", back: "If the ground (P-lead) is broken/disconnected, the magneto will supply current to the spark plugs EVEN WITH THE IGNITION SWITCH OFF. Moving the propeller could start the engine — TREAT EVERY PROPELLER AS LIVE." },
      { front: "How to stop an engine if mag remains hot with switch off:", back: "Move the mixture control to IDLE CUT-OFF position. Then have the system checked by a qualified maintenance technician." },
      { front: "Three types of induction system icing:", back: "1) IMPACT ice — moist air freezes on induction components at OAT ≤ 0°C. 2) THROTTLE ice — water vapor condenses/freezes at the partially closed throttle butterfly. 3) FUEL VAPORIZATION ice (carb icing) — fuel cooling + pressure drop causes ice in float-type carbs." },
      { front: "When does impact ice build most rapidly?", back: "When ambient air temperature is approximately -4°C (25°F). Supercooled moisture is still in a liquid state. Affects both carbureted AND fuel-injected engines." },
      { front: "Carburetor ice — temperature/humidity envelope:", back: "MOST LIKELY: OAT below 21°C (70°F) AND humidity above 80%. POSSIBLE: even at OAT as high as 38°C (100°F) and humidity as low as 50%, due to ~15°C (27°F) cooling in the carb venturi." },
      { front: "Why does carburetor ice form?", back: "Vaporization of fuel + decreasing air pressure (Bernoulli) in the carb venturi → sudden cooling up to 15°C (27°F). If carb temp drops to 0°C (32°F) or below, moisture deposits as ice/frost." },
      { front: "Carb icing — risk at LOW power settings:", back: "Low power = lower engine/engine bay temps. Icing can develop UNDETECTED until power is reapplied (e.g., leveling off from a descent), at which point the engine may not respond." },
      { front: "First indication of carb icing — fixed-pitch propeller:", back: "Loss of RPM. Roughness may develop later." },
      { front: "First indication of carb icing — constant-speed propeller:", back: "Drop in MANIFOLD PRESSURE (propeller governor adjusts pitch to maintain RPM, masking the symptom)." },
      { front: "How does carburetor heat work?", back: "Routes heated air (warmed by exhaust) into the carburetor. Melts ice and prevents formation. Air is hotter and less dense → ENRICHES mixture and slightly reduces power." },
      { front: "Carb heat application — rule:", back: "Use FULL ON when icing detected/expected. Leave on until certain all ice is removed. PARTIAL heat may worsen icing (raises induction temp into the icing range). DO NOT use during takeoff (max power needed)." },
      { front: "Carb heat — what happens with fixed-pitch prop when applied if no ice:", back: "RPM DROPS slightly (hot air less dense). If ICE was present: initial RPM drop, then GRADUAL RPM INCREASE as ice melts." },
      { front: "Mixture control — what does it do?", back: "Adjusts fuel/air ratio to compensate for varying air density at different altitudes. Maintains approximately 1:12 fuel-to-air ratio by weight for optimum power." },
      { front: "Too-rich mixture symptoms:", back: "Excessive fuel consumption, rough engine operation, loss of power, below-normal cylinder temperatures, spark plug fouling." },
      { front: "Too-lean mixture symptoms:", back: "Rough engine, detonation, overheating, loss of power." },
      { front: "Why lean at altitude?", back: "Air density decreases with altitude. The carb meters fuel by VOLUME — but air WEIGHT decreases. Without leaning, the mixture becomes too rich. Lean to maintain proper fuel/air ratio." },
      { front: "Exhaust Gas Temperature (EGT) gauge:", back: "Measures exhaust gas temperature at the exhaust manifold. Used to lean mixture precisely. Lean until EGT peaks, then enrich until EGT drops the manufacturer's recommended amount (typically 25-75°F). Can reduce fuel consumption ~10%." },
      { front: "Four-stroke engine cycle:", back: "1) INTAKE — piston downward, intake valve open, fuel/air drawn in. 2) COMPRESSION — both valves closed, piston up, mixture compressed. 3) POWER — ignition, piston pushed down by combustion. 4) EXHAUST — exhaust valve open, piston up, gases expelled." },
      { front: "Detonation:", back: "Fuel/air mixture EXPLODES instead of burning evenly. Caused by: (1) lower-than-specified octane fuel, OR (2) excessive engine temperatures. Damaging — causes wear, can warp pistons/valves." },
      { front: "Pre-ignition:", back: "Uncontrolled firing of fuel/air mixture BEFORE the normal spark. Often follows detonation (which produces extreme heat). Causes severe structural stress on engine parts." },
      { front: "Detonation recovery during takeoff climb:", back: "Lower the nose slightly to INCREASE airspeed → improves cooling and decreases engine workload. Verify carb heat off, mixture appropriate." },
      { front: "Aviation fuel — 100LL designation:", back: "100 = anti-knock (octane) rating. LL = Low Lead. Higher grade = more compression without detonation = more power available. Color: BLUE for 100LL." },
      { front: "Fuel grade — substitution rule:", back: "Using HIGHER-than-specified grade is BETTER than using LOWER-than-specified. Lower grade risks detonation and overheating. If accidentally mixed, fuels turn STRAW-COLORED." },
      { front: "Why fill fuel tanks at end of day?", back: "Eliminates airspace in the tank → prevents moisture condensation overnight (which contributes to fuel contamination and microbial growth)." },
      { front: "Pre-flight fuel check:", back: "Drain ALL fuel strainer drains and fuel tank sumps before each flight to check for water and contamination." },
      { front: "Refueling fire prevention:", back: "Ground wire MUST be attached to airplane before fuel cap is removed. Nozzle grounded to airplane before and during refueling. Fuel truck also grounded to airplane and to ground. Prevents static spark ignition." },
      { front: "Cold weather engine preheat:", back: "Recommended below 20°F by most manufacturers. Required below 0°F. Warms oil and cylinders, easing starting and preventing damage. Many cold-weather FBOs offer this service." },
      { front: "After cold start — minimum idle time:", back: "2 to 5 minutes at low RPM to allow oil to warm and circulate before adding significant power. Cold thick oil doesn't lubricate properly." },
      { front: "Flooded engine recovery:", back: "Mixture LEAN, throttle FULL OPEN, crank engine. Excess fuel will be cleared from cylinders." },
      { front: "Typical electrical system voltage in light airplanes:", back: "12-volt battery with 14-volt direct-current alternator system. Or 24-volt battery with 28-volt system in larger aircraft. Alternator output is HIGHER than battery voltage to maintain charge." },
      { front: "Basic electrical system components:", back: "Alternator/generator, battery, master/battery switch, bus bar (terminal), fuses/circuit breakers, voltage regulator, ammeter, associated wiring." },
      { front: "Master switch function:", back: "Turns on the entire electrical system EXCEPT the ignition system (which is powered by magnetos). Some aircraft have separate master and alternator switches." },
      { front: "Alternator vs generator advantage:", back: "Alternator produces sufficient current at LOW engine RPM (generator does not). Output more constant across RPM range. Alternators are lighter, cheaper to maintain, less prone to overload." },
      { front: "What is a bus bar?", back: "A common terminal in the electrical system to connect the main system to equipment. Simplifies wiring and distributes voltage from a common point." },
      { front: "Fuses vs circuit breakers:", back: "Both protect circuits from overload. FUSES are one-time replacements (spares should be carried). CIRCUIT BREAKERS can be MANUALLY RESET (push in). If breaker trips twice, do NOT reset — likely a short circuit; fire risk." },
      { front: "Ammeter — center-zero — interpretation:", back: "POSITIVE reading = battery being CHARGED. NEGATIVE reading = current being DRAWN from battery (alternator failure or overload). Brief discharge during start is normal." },
      { front: "Loadmeter (alternative to ammeter):", back: "Shows current coming from the alternator. Zero reading with electrical equipment in use = alternator failure (current from battery). Should show high reading briefly after start, then stabilize lower." },
      { front: "Alternator over-voltage protection:", back: "Most airplanes have an over-voltage relay that trips the alternator offline if safe voltage limit is exceeded. Indicated by negative ammeter reading. Reset by cycling alternator master switch off then on." },
      { front: "Hazard of starting with a dead battery using GPU:", back: "DO NOT do this. Electrical energy forced into dead battery causes overheating and possible EXPLOSION → damage to the airplane." },
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
