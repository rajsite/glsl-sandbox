import GlslCanvas from './node_modules/glslCanvas/src/GlslCanvas.js';

// glsl sandbox shaders

const surfaceVertexShader = `
    attribute vec3 position;
    attribute vec2 surfacePosAttrib;
    varying vec2 surfacePosition;

    void main() {
        surfacePosition = surfacePosAttrib;
        gl_Position = vec4( position, 1.0 );
    }
`;
class GLSLSandbox extends HTMLElement {
    constructor () {
        super();
        this.glsl = undefined;
    }

    connectedCallback () {
        const exampleFragment = this.querySelector('template').content.textContent;
        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 600;
        this.appendChild(canvas);
        this.glsl = new GlslCanvas(canvas);
        this.glsl.load(exampleFragment, surfaceVertexShader);
    }
}

customElements.define('glsl-sandbox', GLSLSandbox);
