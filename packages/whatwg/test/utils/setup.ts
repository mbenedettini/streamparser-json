import {
  TransformStream as NodeTransformStream,
  ReadableStream as NodeReadableStream,
} from "node:stream/web";

if (!global.TransformStream) {
  // @ts-ignore Overriding TransformStream for Node 16
  global.TransformStream = NodeTransformStream;
  // @ts-ignore Overriding ReadableStream for Node 16
  global.ReadableStream = NodeReadableStream;
}
