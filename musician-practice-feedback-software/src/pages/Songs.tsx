import React, { useEffect, useRef } from 'react';
import { Fraction, OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import './Songs.css';

const Songs = () => {
  const osmdRef = useRef<OpenSheetMusicDisplay | null>(null);

  useEffect(() => {
    const doc = `<?xml version="1.0" encoding="UTF-16"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise>
    <movement-title>Loch Lomond</movement-title>
    <identification>
        <creator type="composer">Trad.</creator>
        <encoding>
            <encoder>abc2xml version 63</encoder>
            <encoding-date>2025-04-02</encoding-date>
        </encoding>
    </identification>
    <part-list>
        <score-part id="P1">
            <part-name />
        </score-part>
    </part-list>
    <part id="P1">
        <measure number="1">
            <attributes>
                <divisions>120</divisions>
                <key>
                    <fifths>1</fifths>
                    <mode>major</mode>
                </key>
                <time>
                    <beats>4</beats>
                    <beat-type>4</beat-type>
                </time>
            </attributes>
            <note>
                <pitch>
                    <step>D</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <notations>
                    <slur number="1" type="start" />
                </notations>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>1. By</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>2. I</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>3. The</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>E</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <notations>
                    <slur number="1" type="stop" />
                </notations>
            </note>
        </measure>
        <measure number="2">
            <harmony>
                <root>
                    <root-step>G</root-step>
                </root>
                <kind>major</kind>
            </harmony>
            <note>
                <pitch>
                    <step>G</step>
                    <octave>4</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>yon</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>mind</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>wee</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>G</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>begin</syllabic>
                    <text>bon</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>where</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>bird</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>A</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>end</syllabic>
                    <text>nie</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>we</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>may</text>
                </lyric>
            </note>
        </measure>
        <measure number="3">
            <harmony>
                <root>
                    <root-step>E</root-step>
                </root>
                <kind>minor</kind>
            </harmony>
            <note>
                <pitch>
                    <step>B</step>
                    <octave>4</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>banks</text>
                </lyric>
                <lyric number="2">
                    <syllabic>begin</syllabic>
                    <text>part</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>sing</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>B</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>and</text>
                </lyric>
                <lyric number="2">
                    <syllabic>end</syllabic>
                    <text>ed</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>and</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>A</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>by</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>on</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>the</text>
                </lyric>
            </note>
        </measure>
        <measure number="4">
            <harmony>
                <root>
                    <root-step>C</root-step>
                </root>
                <kind>major</kind>
            </harmony>
            <note>
                <pitch>
                    <step>G</step>
                    <octave>4</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>yon</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>yon</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>wild</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>G</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>begin</syllabic>
                    <text>bon</text>
                </lyric>
                <lyric number="2">
                    <syllabic>begin</syllabic>
                    <text>sha</text>
                </lyric>
                <lyric number="3">
                    <syllabic>begin</syllabic>
                    <text>flow</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>E</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>end</syllabic>
                    <text>nie</text>
                </lyric>
                <lyric number="2">
                    <syllabic>end</syllabic>
                    <text>dy</text>
                </lyric>
                <lyric number="3">
                    <syllabic>end</syllabic>
                    <text>ers</text>
                </lyric>
            </note>
        </measure>
        <measure number="5">
            <harmony>
                <root>
                    <root-step>D</root-step>
                </root>
                <kind>dominant</kind>
            </harmony>
            <note>
                <pitch>
                    <step>D</step>
                    <octave>4</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>braes</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>glen,</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>spring,</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>D</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>where</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>On</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>And</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>E</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>the</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>the</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>in</text>
                </lyric>
            </note>
        </measure>
        <measure number="6">
            <harmony>
                <root>
                    <root-step>G</root-step>
                </root>
                <kind>major</kind>
            </harmony>
            <note>
                <pitch>
                    <step>G</step>
                    <octave>4</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>sun</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>steep,</text>
                </lyric>
                <lyric number="3">
                    <syllabic>begin</syllabic>
                    <text>sun</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>G</step>
                    <octave>4</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>shines</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>steep</text>
                </lyric>
                <lyric number="3">
                    <syllabic>end</syllabic>
                    <text>shine the</text>
                </lyric>
            </note>
        </measure>
        <measure number="7">
            <harmony>
                <root>
                    <root-step>E</root-step>
                </root>
                <kind>minor</kind>
            </harmony>
            <note>
                <pitch>
                    <step>G</step>
                    <octave>4</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>bright</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>side</text>
                </lyric>
                <lyric number="3">
                    <syllabic>begin</syllabic>
                    <text>wa</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>B</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>on</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>o'</text>
                </lyric>
                <lyric number="3">
                    <syllabic>end</syllabic>
                    <text>ters</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>D</step>
                    <octave>5</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>Loch</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>Ben</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>are</text>
                </lyric>
            </note>
        </measure>
        <measure number="8">
            <harmony>
                <root>
                    <root-step>C</root-step>
                </root>
                <kind>major</kind>
            </harmony>
            <note>
                <pitch>
                    <step>E</step>
                    <octave>5</octave>
                </pitch>
                <duration>480</duration>
                <voice>1</voice>
                <type>whole</type>
                <lyric number="1">
                    <syllabic>begin</syllabic>
                    <text>Lo</text>
                </lyric>
                <lyric number="2">
                    <syllabic>begin</syllabic>
                    <text>Lo</text>
                </lyric>
                <lyric number="3">
                    <syllabic>begin</syllabic>
                    <text>sleep</text>
                </lyric>
            </note>
        </measure>
        <measure number="9">
            <harmony>
                <root>
                    <root-step>D</root-step>
                </root>
                <kind>dominant</kind>
            </harmony>
            <note>
                <pitch>
                    <step>D</step>
                    <octave>5</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>end</syllabic>
                    <text>mond,</text>
                </lyric>
                <lyric number="2">
                    <syllabic>end</syllabic>
                    <text>mond,</text>
                </lyric>
                <lyric number="3">
                    <syllabic>end</syllabic>
                    <text>ing:</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>D</step>
                    <octave>5</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>Where</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>Where</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>The</text>
                </lyric>
            </note>
        </measure>
        <measure number="10">
            <harmony>
                <root>
                    <root-step>C</root-step>
                </root>
                <kind>major</kind>
            </harmony>
            <note>
                <pitch>
                    <step>E</step>
                    <octave>5</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>me</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>in</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>broken</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>E</step>
                    <octave>5</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>and</text>
                </lyric>
                <lyric number="2">
                    <syllabic>begin</syllabic>
                    <text>pur</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>heart</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>D</step>
                    <octave>5</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>my</text>
                </lyric>
                <lyric number="2">
                    <syllabic>end</syllabic>
                    <text>ple</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>will</text>
                </lyric>
            </note>
        </measure>
        <measure number="11">
            <harmony>
                <root>
                    <root-step>G</root-step>
                </root>
                <kind>major</kind>
            </harmony>
            <note>
                <pitch>
                    <step>B</step>
                    <octave>4</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>true</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>hue,</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>ken</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>B</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>love</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>the</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>nae</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>D</step>
                    <octave>5</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>were</text>
                </lyric>
            </note>
        </measure>
        <measure number="12">
            <harmony>
                <root>
                    <root-step>A</root-step>
                </root>
                <kind>minor</kind>
            </harmony>
            <note>
                <pitch>
                    <step>C</step>
                    <octave>5</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>begin</syllabic>
                    <text>ev</text>
                </lyric>
                <lyric number="2">
                    <syllabic>begin</syllabic>
                    <text>Hei</text>
                </lyric>
                <lyric number="3">
                    <syllabic>begin</syllabic>
                    <text>se</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>B</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>end</syllabic>
                    <text>er</text>
                </lyric>
                <lyric number="2">
                    <syllabic>end</syllabic>
                    <text>land</text>
                </lyric>
                <lyric number="3">
                    <syllabic>end</syllabic>
                    <text>cond</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>A</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>wont</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>hills</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>spring</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>G</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>to</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>we</text>
                </lyric>
                <lyric number="3">
                    <syllabic>begin</syllabic>
                    <text>a</text>
                </lyric>
            </note>
        </measure>
        <measure number="13">
            <harmony>
                <root>
                    <root-step>D</root-step>
                </root>
                <kind>dominant</kind>
            </harmony>
            <note>
                <pitch>
                    <step>E</step>
                    <octave>4</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>go,</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>view,</text>
                </lyric>
                <lyric number="3">
                    <syllabic>end</syllabic>
                    <text>gain,</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>D</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>on</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>And</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>And</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>E</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>the</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>the</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>the</text>
                </lyric>
            </note>
        </measure>
        <measure number="14">
            <harmony>
                <root>
                    <root-step>G</root-step>
                </root>
                <kind>major</kind>
            </harmony>
            <note>
                <pitch>
                    <step>G</step>
                    <octave>4</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>bonnie</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>moon</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>world</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>B</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>begin</syllabic>
                    <text>bon</text>
                </lyric>
                <lyric number="2">
                    <syllabic>begin</syllabic>
                    <text>shin</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>does</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>D</step>
                    <octave>5</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>end</syllabic>
                    <text>nie</text>
                </lyric>
                <lyric number="2">
                    <syllabic>end</syllabic>
                    <text>in'</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>not</text>
                </lyric>
            </note>
        </measure>
        <measure number="15">
            <harmony>
                <root>
                    <root-step>C</root-step>
                </root>
                <kind>major</kind>
            </harmony>
            <note>
                <pitch>
                    <step>E</step>
                    <octave>5</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>banks</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>out</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>know</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>D</step>
                    <octave>5</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>of</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>from</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>how</text>
                </lyric>
            </note>
            <note>
                <pitch>
                    <step>B</step>
                    <octave>4</octave>
                </pitch>
                <duration>120</duration>
                <voice>1</voice>
                <type>quarter</type>
                <lyric number="1">
                    <syllabic>single</syllabic>
                    <text>Loch</text>
                </lyric>
                <lyric number="2">
                    <syllabic>single</syllabic>
                    <text>the</text>
                </lyric>
                <lyric number="3">
                    <syllabic>single</syllabic>
                    <text>we're</text>
                </lyric>
            </note>
        </measure>
        <measure number="16">
            <harmony>
                <root>
                    <root-step>D</root-step>
                </root>
                <kind>dominant</kind>
            </harmony>
            <note>
                <pitch>
                    <step>A</step>
                    <octave>4</octave>
                </pitch>
                <duration>480</duration>
                <voice>1</voice>
                <type>whole</type>
                <lyric number="1">
                    <syllabic>begin</syllabic>
                    <text>Lo</text>
                </lyric>
                <lyric number="2">
                    <syllabic>begin</syllabic>
                    <text>gloam</text>
                </lyric>
                <lyric number="3">
                    <syllabic>begin</syllabic>
                    <text>griev</text>
                </lyric>
            </note>
        </measure>
        <measure number="17">
            <harmony>
                <root>
                    <root-step>G</root-step>
                </root>
                <kind>major</kind>
            </harmony>
            <note>
                <pitch>
                    <step>G</step>
                    <octave>4</octave>
                </pitch>
                <duration>240</duration>
                <voice>1</voice>
                <type>half</type>
                <lyric number="1">
                    <syllabic>end</syllabic>
                    <text>mond.</text>
                </lyric>
                <lyric number="2">
                    <syllabic>end</syllabic>
                    <text>in'.</text>
                </lyric>
                <lyric number="3">
                    <syllabic>end</syllabic>
                    <text>in'.</text>
                </lyric>
            </note>
            <barline location="right">
                <bar-style>light-heavy</bar-style>
            </barline>
        </measure>
    </part>
</score-partwise>
`;

osmdRef.current = new OpenSheetMusicDisplay("osmdContainer");
    osmdRef.current.setOptions({
      backend: "svg",
      drawTitle: true,
      autoResize: true,
    });
    osmdRef.current.load(doc).then(() => {
      if (osmdRef.current) {
        osmdRef.current.render();
      }
    });
  }, []);

  function afterRender() {
    if (!osmdRef.current) return;
    const cursor = osmdRef.current.cursor;
    cursor.reset(); // Ensure the cursor starts at the beginning
    cursor.show();
  
    const bpm = 120; // Set the desired BPM
    const beatDuration = 60000 / bpm; // Duration of a quarter note in milliseconds (60000 ms = 1 minute)
  
    const moveCursor = () => {
      if (cursor.Iterator.EndReached) {
        cursor.hide();
        return;
      }
  
      // Get the current note's type and adjust the duration
      const notes = cursor.NotesUnderCursor();
      if (notes && notes.length > 0) {
        const noteType = notes[0].TypeLength; // Get the note type (e.g., "quarter", "half", "whole")
        let noteDurationMs = beatDuration; // Default to quarter note duration
  
        // Adjust the duration based on the note type
        if (noteType.Equals(new Fraction(2, 4))) {
          noteDurationMs = beatDuration * 2; // Half note lasts twice as long as a quarter note
        }
        if (noteType.Equals(new Fraction(4, 4))) {
          noteDurationMs = beatDuration * 4; // Whole note lasts four times as long as a quarter note
        }
  
        // Move the cursor to the next note after the calculated duration
        setTimeout(() => {
          cursor.next();
          moveCursor(); // Recursively call to handle the next note
        }, noteDurationMs);
      } else {
        // If no notes are found, just move to the next position
        cursor.next();
        moveCursor(); // Recursively call to handle the next position
      }
    };
  
    moveCursor(); // Start the cursor movement
  }

  return (
    <div className="songs-container">
      <h1>Music Score</h1>
      <button onClick={afterRender} className="start-button">
        <span className="play-icon">&#9658;</span> Start
      </button>
      <div id="osmdContainer" className="osmd-container" />
    </div>
  );
};

export default Songs;