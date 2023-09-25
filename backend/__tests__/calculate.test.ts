import {calculatePartHealth, calculateMachineHealth} from '../calculations';
import {
  MachineType,
  WeldingRobotPart,
  partInfo,
  PaintingStationPart,
  AssemblyLinePart,
  QualityControlStationPart,
} from '../../native-app/data/types';

describe('calculatePartHealth for WeldingRobot', () => {
  it('calculates part health correctly', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const part: partInfo = {name: WeldingRobotPart.ErrorRate, value: 0.5};
    const expectedHealth = 72.22222222222223;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe('calculateMachineHealth for WeldingRobot', () => {
  it('calculates machine health correctly', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const parts = [
      {name: WeldingRobotPart.ErrorRate, value: 0.5},
      {name: WeldingRobotPart.VibrationLevel, value: 4.0},
      {name: WeldingRobotPart.ElectrodeWear, value: 0.8},
      {name: WeldingRobotPart.ShieldingPressure, value: 12.0},
      {name: WeldingRobotPart.WireFeedRate, value: 7.5},
      {name: WeldingRobotPart.ArcStability, value: 92.0},
      {name: WeldingRobotPart.SeamWidth, value: 1.5},
      {name: WeldingRobotPart.CoolingEfficiency, value: 85.0},
    ];
    const expectedHealth = 76.70138888888889;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});

describe('calculatePartHealth for PaintingStation', () => {
  it('calculates part health correctly', () => {
    const machineName: MachineType = MachineType.PaintingStation;
    const part: partInfo = {name: PaintingStationPart.FlowRate, value: 25};
    const expectedHealth = 75;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe('calculateMachineHealth for PaintingStation', () => {
  it('calculates machine health correctly', () => {
    const machineName: MachineType = MachineType.PaintingStation;
    const parts = [
      {name: PaintingStationPart.FlowRate, value: 0.5},
      {name: PaintingStationPart.ColorConsistency, value: 4.0},
      {name: PaintingStationPart.NozzleCondition, value: 0.8},
      {name: PaintingStationPart.Pressure, value: 12.0}
    ];
    const expectedHealth = 22.5;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});

describe('calculatePartHealth for AssemblyLine', () => {
  it('calculates part health correctly', () => {
    const machineName: MachineType = MachineType.AssemblyLine;
    const part: partInfo = {name: AssemblyLinePart.BeltSpeed, value: 1.5};
    const expectedHealth = 75;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe('calculateMachineHealth for AssemblyLine', () => {
  it('calculates machine health correctly', () => {
    const machineName: MachineType = MachineType.AssemblyLine;
    const parts = [
      {name: AssemblyLinePart.AlignmentAccuracy, value: 0.5},
      {name: AssemblyLinePart.BeltSpeed, value: 1.5},
      {name: AssemblyLinePart.FittingTolerance, value: 0.025},
      {name: AssemblyLinePart.Speed, value: 1.5}
    ];
    const expectedHealth = 78.99305555555556;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});

describe('calculatePartHealth for AssemblyLine', () => {
  it('calculates part health correctly', () => {
    const machineName: MachineType = MachineType.QualityControlStation;
    const part: partInfo = {name: QualityControlStationPart.CameraCalibration, value: 0.5};
    const expectedHealth = 75;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });
});

describe('calculateMachineHealth for AssemblyLine', () => {
  it('calculates machine health correctly', () => {
    const machineName: MachineType = MachineType.QualityControlStation;
    const parts = [
      {name: QualityControlStationPart.CameraCalibration, value: 0.5},
      {name: QualityControlStationPart.CriteriaSettings, value: 0.5},
      {name: QualityControlStationPart.LightIntensity, value: 91.5},
      /*{name: QualityControlStationPart.SoftwareVersion, value: 'v2.0'}
        Bug? Find out how strings should be handled
      */  
    ];
    const expectedHealth = 71.66666666666667;

    const result = calculateMachineHealth(machineName, parts);
    expect(result).toBe(expectedHealth);
  });
});
