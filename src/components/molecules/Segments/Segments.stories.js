import React from "react";
import { storiesOf } from "@storybook/react";
import Segments from "./Segments";

storiesOf("Molecules/Segment", module)
    .add("default", () => (
        <Segments>
            <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
            </p>
        </Segments>
    ))
    .add("horizontal", () => (
        <Segments className="horizontal">
            <Segments>
                <p>Pellent esque habitant morbi tristique egestas.</p>
            </Segments>
            <Segments>
                <p>
                    Vestibulum tortor quam, feugiat vitae, senectus et netus et
                    malesuada fames ac turpis ultricies eget, tempor sit amet,
                    ante. Donec eu libero sit amet quam egestas semper.
                </p>
            </Segments>
            <Segments>
                <p>
                    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                </p>
            </Segments>
        </Segments>
    ))
    .add("raised", () => (
        <Segments className="raised">
            <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
            </p>
        </Segments>
    ))
    .add("stacked", () => (
        <Segments className="stacked">
            <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
            </p>
        </Segments>
    ))
    .add("tall stacked", () => (
        <Segments className="tall stacked">
            <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
            </p>
        </Segments>
    ))
    .add("grouped", () => (
        <Segments>
            <Segments>
                <p>Top</p>
            </Segments>
            <Segments>
                <p>Middle</p>
            </Segments>
            <Segments>
                <p>Middle</p>
            </Segments>
            <Segments>
                <p>Middle</p>
            </Segments>
            <Segments>
                <p>Bottom</p>
            </Segments>
        </Segments>
    ))
    .add("nested grouped", () => (
        <Segments>
            <Segments>
                <p>Top</p>
            </Segments>
            <Segments>
                <Segments>
                    <p>Nested Top</p>
                </Segments>
                <Segments>
                    <p>Nested Middle</p>
                </Segments>
                <Segments>
                    <p>Nested Bottom</p>
                </Segments>
            </Segments>
            <Segments>
                <p>Middle</p>
            </Segments>
            <Segments className="horizontal">
                <Segments>
                    <p>Top</p>
                </Segments>
                <Segments>
                    <p>Middle</p>
                </Segments>
                <Segments>
                    <p>Bottom</p>
                </Segments>
            </Segments>
            <Segments>
                <p>Middle</p>
            </Segments>
            <Segments>
                <Segments className="horizontal">
                    <Segments>
                        <p>Top</p>
                    </Segments>
                    <Segments>
                        <p>Middle</p>
                    </Segments>
                    <Segments>
                        <p>Bottom</p>
                    </Segments>
                </Segments>
            </Segments>
            <Segments>
                <p>Bottom</p>
            </Segments>
        </Segments>
    ));
