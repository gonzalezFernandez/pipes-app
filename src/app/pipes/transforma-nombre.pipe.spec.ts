import { TransformaNombrePipe } from './transforma-nombre.pipe';

describe('TransformaNombrePipe', () => {
  it('create an instance', () => {
    const pipe = new TransformaNombrePipe();
    expect(pipe).toBeTruthy();
  });
});
