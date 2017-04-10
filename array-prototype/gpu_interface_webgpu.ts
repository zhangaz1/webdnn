namespace WebDNN {
  export class GPUInterfaceWebGPU implements GPUInterface {
    webgpuHandler: WebGPUHandler;
    shaderLanguage: string;

    constructor(private option?: any) {
      
    }

    async init() {
      // initialize webgpu, build kernels
      this.shaderLanguage = 'metal';
      this.webgpuHandler = new WebGPUHandler();
      await this.webgpuHandler.init();
      BufferWebGPU.init(this.webgpuHandler);
      this.init_basic_kernels();
    }

    private init_basic_kernels() {
      this.webgpuHandler.loadKernel(`
kernel void sync(){}
      `, 'basic');

    }

  }
}
