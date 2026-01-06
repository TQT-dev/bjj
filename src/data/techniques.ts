import { Technique } from '../types';

export const techniques: Technique[] = [
  {
    id: 'k-guard',
    name: 'K-Guard Entry to Off-Balance and Finishes',
    tags: ['guard', 'leg entanglement', 'sweep'],
    level: 'intermediate',
    startingPositions: ['seated guard', 'open guard'],
    mainLine: [
      'stance-break',
      'collar-tie-to-wrist',
      'angle-step',
      'hip-switch',
      'k-shield',
      'far-hip-underhook',
      'knee-line-hide',
      'off-balance',
      'sweep-lift',
      'wrestle-up-finish'
    ],
    nodes: [
      {
        id: 'stance-break',
        title: 'Break stance & set frames',
        bodyPositionText: 'Seated, shin-to-shin available, elbows tight',
        preconditions: ['Opponent standing or half-kneeling', 'Inside position with both knees pointed up'],
        actions: [
          'Post one hand behind you lightly to stay mobile',
          'Use opposite foot to windshield-wiper inside opponent ankle',
          'Keep elbows inside knees to protect collar tie'
        ],
        cues: ['Spine tall', 'Chin tucked', 'Lead foot light and ready to post'],
        grips: ['Posting hand behind hips', 'Inside foot touching opponent ankle'],
        mistakes: ['Reaching for head before controlling distance', 'Sitting flat and losing mobility'],
        counters: [{ text: 'Opponent steps back', targetNodeId: 'angle-step' }],
        safety: ['Avoid rounding lower back; stay stacked over hips'],
        coordinates: { x: 0, y: 0 }
      },
      {
        id: 'collar-tie-to-wrist',
        title: 'Collar tie to wrist drag',
        bodyPositionText: 'Seated, one hand on head transitioning to wrist control',
        preconditions: ['Inside elbow line controlled', 'Opponent within arm’s reach'],
        actions: [
          'Collar tie to bring opponent’s head down and expose wrist',
          'Transfer grip to cross-wrist and pull it across your center',
          'Scoot hips slightly back to create pulling angle'
        ],
        cues: ['Keep ear close to shoulder for defense', 'Use tie to move opponent, not yourself'],
        grips: ['Collar tie transitioning to cross-wrist'],
        mistakes: ['Letting wrist slide above your shoulder line', 'Flaring elbows and opening elbows for underhooks'],
        counters: [{ text: 'Opponent postures up', targetNodeId: 'angle-step' }],
        safety: ['Do not crank neck on the collar tie; use spine alignment'],
        coordinates: { x: 200, y: -80 }
      },
      {
        id: 'angle-step',
        title: 'Open angle with outside step',
        bodyPositionText: 'Hip line turned slightly, shin prepared to shoot under',
        preconditions: ['One hand free to post', 'Opponent weight committed forward or stationary'],
        actions: [
          'Post hand behind you and step outside foot laterally',
          'Rotate chest toward opponent’s far knee to open hip angle',
          'Slide inside knee between opponent’s legs as you rotate'
        ],
        cues: ['Keep head over chest to avoid sprawls', 'Step as you pull wrist across'],
        grips: ['Post hand, cross-wrist pull maintained'],
        mistakes: ['Stepping too shallow and getting stuffed', 'Turning back to opponent'],
        counters: [{ text: 'Opponent squares hips', targetNodeId: 'hip-switch' }],
        safety: ['Avoid planting hand too far back; keep elbow soft'],
        coordinates: { x: 380, y: -40 }
      },
      {
        id: 'hip-switch',
        title: 'Switch hips and thread knee',
        bodyPositionText: 'Hip rotated, knee threading toward far hip line',
        preconditions: ['Angle created to the outside', 'Inside knee free to move'],
        actions: [
          'Switch your hips to face the opponent while sliding shin under their thigh',
          'Maintain wrist drag to prevent cross-face',
          'Keep knee wide and foot flexed to form initial K-line'
        ],
        cues: ['Shin points to far hip', 'Stay low so opponent cannot underhook'],
        grips: ['Cross-wrist, optional collar tie on the head'],
        mistakes: ['Letting opponent pummel for cross-face', 'Dropping knee to mat'],
        counters: [{ text: 'Opponent backsteps', targetNodeId: 'backstep-reaction' }],
        safety: ['Keep toes dorsiflexed to protect knee'],
        coordinates: { x: 560, y: 20 }
      },
      {
        id: 'k-shield',
        title: 'Establish K-shield hook',
        bodyPositionText: 'Top shin across opponent hip, bottom knee angled up',
        preconditions: ['Hip angle open', 'Inside shin under thigh'],
        actions: [
          'Shoot top knee high across their torso creating the “K” shape',
          'Clamp heel near opponent far hip while curling toes',
          'Keep head tight to knee to hide inside space'
        ],
        cues: ['Knee high, heel heavy', 'Shoulders off mat to stay mobile'],
        grips: ['Cross-wrist, secondary hand cupping opponent ankle'],
        mistakes: ['Loose hook that slides down thigh', 'Lying flat and losing crunch'],
        counters: [{ text: 'Opponent knee slides', targetNodeId: 'knee-slide-reply' }],
        safety: ['Avoid twisting knee; move hips when they drive pressure'],
        coordinates: { x: 740, y: 0 }
      },
      {
        id: 'far-hip-underhook',
        title: 'Underhook far hip',
        bodyPositionText: 'Shoulders engaged, forearm past opponent far hip',
        preconditions: ['K-shield secure', 'Opponent weight forward enough for reach'],
        actions: [
          'Release ankle grip to underhook far hip line',
          'Glue elbow to ribs to prevent limp arm',
          'Lift hips slightly to float opponent’s knee'
        ],
        cues: ['Elbow in, palm up', 'Use hamstring curl to keep hook'],
        grips: ['Underhook on far hip', 'Cross-wrist remains'],
        mistakes: ['Overreaching and exposing back', 'Allowing opponent to smash knee line'],
        counters: [{ text: 'Opponent sprawl', targetNodeId: 'knee-line-hide' }],
        safety: ['Keep neck neutral; avoid headbutting knee'],
        coordinates: { x: 920, y: 40 }
      },
      {
        id: 'knee-line-hide',
        title: 'Hide knee line & clamp',
        bodyPositionText: 'Knee past opponent thigh, shin angled outward',
        preconditions: ['Underhook set', 'Hook engaged on far hip'],
        actions: [
          'Rotate knee outward to slide past their thigh line',
          'Pin opponent ankle with your free hand to stop backstep',
          'Flex hamstring to keep knee glued to chest'
        ],
        cues: ['Knee past their adductor', 'Heel heavy on far hip'],
        grips: ['Far hip underhook, ankle pin'],
        mistakes: ['Leaving knee below their thigh', 'Relaxing hook when they pummel'],
        counters: [{ text: 'Opponent tries to staple shin', targetNodeId: 'knee-slide-reply' }],
        safety: ['Move hips with their pressure to protect MCL'],
        coordinates: { x: 1100, y: 30 }
      },
      {
        id: 'off-balance',
        title: 'Off-balance with shoulder pull',
        bodyPositionText: 'K-guard locked, opponent weight disrupted forward',
        preconditions: ['Knee line hidden', 'Hip underhook secured'],
        actions: [
          'Pull far hip underhook toward your shoulder',
          'Extend K-shield slightly to elevate opponent',
          'Kick bottom leg toward far hip to rotate them'
        ],
        cues: ['Pull-extend-kick rhythm', 'Keep head tight to knee'],
        grips: ['Underhook far hip, wrist drag maintained'],
        mistakes: ['Extending without pulling first', 'Letting opponent post hand to mat'],
        counters: [{ text: 'Opponent posts hand', targetNodeId: 'sweep-lift' }],
        safety: ['Control post hand to avoid knee torque when they fall'],
        coordinates: { x: 1280, y: -10 }
      },
      {
        id: 'sweep-lift',
        title: 'Elevate for sweep entry',
        bodyPositionText: 'Opponent lifted onto shin line',
        preconditions: ['Opponent forced to post', 'K-shield angle maintained'],
        actions: [
          'Lift with K-shield as you pull wrist across',
          'Rotate hips to bring opponent’s weight over your shoulders',
          'Look toward their far hip to initiate roll'
        ],
        cues: ['Eyes look where you want to sweep', 'Keep elbow glued to ribs'],
        grips: ['Far hip underhook, cross-wrist control'],
        mistakes: ['Swinging leg without hip rotation', 'Letting go of wrist too early'],
        counters: [{ text: 'Opponent backsteps mid-sweep', targetNodeId: 'backstep-reaction' }],
        safety: ['Do not let opponent knee drop onto rib cage; keep frames'],
        coordinates: { x: 1460, y: -30 }
      },
      {
        id: 'wrestle-up-finish',
        title: 'Wrestle up to sweep finish',
        bodyPositionText: 'Coming up on elbow and knee, chest tight to opponent shin',
        preconditions: ['Opponent elevated and posting', 'You control near ankle or shin'],
        actions: [
          'Post elbow then hand to come to knee-elbow base',
          'Drive knee through to topple opponent over trapped ankle',
          'Settle into half guard top or knee-cut angle'
        ],
        cues: ['Lead knee tight to their shin', 'Keep head high to avoid guillotine'],
        grips: ['Ankle control with free hand', 'Underhook transitions to body lock'],
        mistakes: ['Standing too tall and losing ankle grip', 'Failing to clear inside knee'],
        counters: [{ text: 'Opponent whizzers hard', targetNodeId: 'inside-sankaku' }],
        safety: ['Keep neck safe; frame against guillotine threats'],
        coordinates: { x: 1640, y: 10 }
      },
      {
        id: 'backstep-reaction',
        title: 'Opponent backsteps — chase hip',
        bodyPositionText: 'Opponent rotates hips away, your shin follows',
        preconditions: ['Opponent attempts to free knee line'],
        actions: [
          'Follow with K-shield hooking behind new far hip',
          'Switch underhook arm to catch near triceps',
          'Square hips to keep knee line hidden'
        ],
        cues: ['Follow their hip with your heel', 'Trap triceps before they staple'],
        grips: ['Triceps catch, shin hook behind hip'],
        mistakes: ['Letting knee float away', 'Leaving head exposed for cross-face'],
        counters: [{ text: 'They try to knee-cut', targetNodeId: 'knee-slide-reply' }],
        safety: ['Move torso with their rotation to avoid twisting knee'],
        coordinates: { x: 980, y: -180 }
      },
      {
        id: 'knee-slide-reply',
        title: 'Knee slide defense to re-guard',
        bodyPositionText: 'Opponent driving knee through, you angle off',
        preconditions: ['They staple shin or knee-cut attempt'],
        actions: [
          'Frame on near shoulder with free hand',
          'Hip escape to widen angle and reinsert shin',
          'Rebuild K-shield or swing to inside sankaku if they overcommit'
        ],
        cues: ['Frame first, hip move second', 'Eyes to far hip for angle'],
        grips: ['Frame at shoulder, optional collar tie'],
        mistakes: ['Trying to shrimp without frame', 'Leaving elbow inside getting kimura trapped'],
        counters: [
          { text: 'They float over frame', targetNodeId: 'inside-sankaku' },
          { text: 'They back out', targetNodeId: 'stance-break' }
        ],
        safety: ['Stay on side to avoid lower back compression'],
        coordinates: { x: 1240, y: -200 }
      },
      {
        id: 'inside-sankaku',
        title: 'Inside sankaku entry',
        bodyPositionText: 'Triangle around opponent thigh with hips angled',
        preconditions: ['Opponent weight forward or whizzer engaged'],
        actions: [
          'Thread free leg across their far hip to close triangle',
          'Pin their posted hand to mat to prevent roll away',
          'Angle hips to expose heel line while keeping knees pinched'
        ],
        cues: ['Knees tight before hunting heel', 'Control their secondary post'],
        grips: ['Post control, optional scoop grip on heel'],
        mistakes: ['Opening triangle to hunt heel', 'Falling to back before controlling post'],
        counters: [{ text: 'Opponent turns knee down', targetNodeId: 'leg-drag-counter' }],
        safety: ['Rotate hips rather than twisting knee when adjusting triangle'],
        coordinates: { x: 1500, y: -190 }
      },
      {
        id: 'leg-drag-counter',
        title: 'Counter leg drag attempt',
        bodyPositionText: 'Opponent tries to drag legs across, you invert slightly',
        preconditions: ['Inside sankaku threatened', 'They attempt to stuff leg across'],
        actions: [
          'Invert slightly to square hips and reclose triangle',
          'Switch grip from post to their far ankle to steer',
          'Use bottom leg hook to off-balance into sweep'
        ],
        cues: ['Invert just enough to free knee', 'Ankle steering creates kuzushi'],
        grips: ['Far ankle grip, triangle maintained'],
        mistakes: ['Full inversion losing hip connection', 'Letting ankle slip causing pass'],
        counters: [{ text: 'Opponent bases wide', targetNodeId: 'wrestle-up-finish' }],
        safety: ['Avoid yanking heel line; move hips to reduce torque'],
        coordinates: { x: 1720, y: -150 }
      },
      {
        id: 'leg-attack',
        title: 'Inside heel hook finishing mechanics',
        bodyPositionText: 'Inside sankaku locked, opponent knee controlled',
        preconditions: ['Heel exposed from inside sankaku', 'Opposite leg controlled or trapped'],
        actions: [
          'Cover toes with lat and reinforce wrist-to-wrist grip',
          'Side bend toward heel while keeping knees pinched',
          'Rotate entire torso for finish, avoiding pure arm pull'
        ],
        cues: ['Knees glued together', 'Rotate as one unit'],
        grips: ['Heel hook grip (palm to palm)', 'Knee line pinned with thighs'],
        mistakes: ['Pulling heel with arms only', 'Letting opponent straighten leg'],
        counters: [{ text: 'Opponent rolls', targetNodeId: 'leg-drag-counter' }],
        safety: ['Control slowly; avoid sudden torque on partner knee'],
        coordinates: { x: 1900, y: -200 }
      }
    ],
    edges: [
      { from: 'stance-break', to: 'collar-tie-to-wrist', label: 'connect to head', type: 'mainline' },
      { from: 'collar-tie-to-wrist', to: 'angle-step', label: 'open angle', type: 'mainline' },
      { from: 'angle-step', to: 'hip-switch', label: 'thread knee', type: 'mainline' },
      { from: 'hip-switch', to: 'k-shield', label: 'shoot K-shield', type: 'mainline' },
      { from: 'k-shield', to: 'far-hip-underhook', label: 'swim underhook', type: 'mainline' },
      { from: 'far-hip-underhook', to: 'knee-line-hide', label: 'hide knee line', type: 'mainline' },
      { from: 'knee-line-hide', to: 'off-balance', label: 'pull-extend', type: 'mainline' },
      { from: 'off-balance', to: 'sweep-lift', label: 'force post', type: 'mainline' },
      { from: 'sweep-lift', to: 'wrestle-up-finish', label: 'come up', type: 'mainline' },
      { from: 'sweep-lift', to: 'backstep-reaction', label: 'backstep mid-sweep', type: 'variation' },
      { from: 'hip-switch', to: 'backstep-reaction', label: 'early backstep', type: 'variation' },
      { from: 'k-shield', to: 'knee-slide-reply', label: 'knee cut pressure', type: 'variation' },
      { from: 'knee-line-hide', to: 'knee-slide-reply', label: 'staple attempt', type: 'variation' },
      { from: 'backstep-reaction', to: 'knee-slide-reply', label: 'they pummel knee', type: 'variation' },
      { from: 'knee-slide-reply', to: 'stance-break', label: 'reset distance', type: 'counter' },
      { from: 'knee-slide-reply', to: 'inside-sankaku', label: 'float to inside triangle', type: 'counter' },
      { from: 'wrestle-up-finish', to: 'inside-sankaku', label: 'whizzer counter', type: 'counter' },
      { from: 'inside-sankaku', to: 'leg-drag-counter', label: 'they stuff leg', type: 'variation' },
      { from: 'inside-sankaku', to: 'leg-attack', label: 'heel exposed', type: 'mainline' },
      { from: 'leg-drag-counter', to: 'wrestle-up-finish', label: 'off-balance to sweep', type: 'counter' },
      { from: 'leg-drag-counter', to: 'leg-attack', label: 'regain inside line', type: 'counter' }
    ]
  }
];
