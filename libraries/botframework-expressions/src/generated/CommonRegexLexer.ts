/**
 * @module botframework-expressions
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
// Generated from ../CommonRegex.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CommonRegexLexer extends Lexer {
	public static readonly BellChar = 1;
	public static readonly ControlChar = 2;
	public static readonly EscapeChar = 3;
	public static readonly FormFeed = 4;
	public static readonly NewLine = 5;
	public static readonly CarriageReturn = 6;
	public static readonly Tab = 7;
	public static readonly Backslash = 8;
	public static readonly HexChar = 9;
	public static readonly Dot = 10;
	public static readonly DecimalDigit = 11;
	public static readonly NotDecimalDigit = 12;
	public static readonly CharWithProperty = 13;
	public static readonly CharWithoutProperty = 14;
	public static readonly WhiteSpace = 15;
	public static readonly NotWhiteSpace = 16;
	public static readonly WordChar = 17;
	public static readonly NotWordChar = 18;
	public static readonly CharacterClassStart = 19;
	public static readonly CharacterClassEnd = 20;
	public static readonly Caret = 21;
	public static readonly Hyphen = 22;
	public static readonly QuestionMark = 23;
	public static readonly Plus = 24;
	public static readonly Star = 25;
	public static readonly OpenBrace = 26;
	public static readonly CloseBrace = 27;
	public static readonly Comma = 28;
	public static readonly EndOfSubject = 29;
	public static readonly Pipe = 30;
	public static readonly OpenParen = 31;
	public static readonly CloseParen = 32;
	public static readonly LessThan = 33;
	public static readonly GreaterThan = 34;
	public static readonly SingleQuote = 35;
	public static readonly Underscore = 36;
	public static readonly Colon = 37;
	public static readonly Hash = 38;
	public static readonly Equals = 39;
	public static readonly Exclamation = 40;
	public static readonly Ampersand = 41;
	public static readonly ALC = 42;
	public static readonly BLC = 43;
	public static readonly CLC = 44;
	public static readonly DLC = 45;
	public static readonly ELC = 46;
	public static readonly FLC = 47;
	public static readonly GLC = 48;
	public static readonly HLC = 49;
	public static readonly ILC = 50;
	public static readonly JLC = 51;
	public static readonly KLC = 52;
	public static readonly LLC = 53;
	public static readonly MLC = 54;
	public static readonly NLC = 55;
	public static readonly OLC = 56;
	public static readonly PLC = 57;
	public static readonly QLC = 58;
	public static readonly RLC = 59;
	public static readonly SLC = 60;
	public static readonly TLC = 61;
	public static readonly ULC = 62;
	public static readonly VLC = 63;
	public static readonly WLC = 64;
	public static readonly XLC = 65;
	public static readonly YLC = 66;
	public static readonly ZLC = 67;
	public static readonly AUC = 68;
	public static readonly BUC = 69;
	public static readonly CUC = 70;
	public static readonly DUC = 71;
	public static readonly EUC = 72;
	public static readonly FUC = 73;
	public static readonly GUC = 74;
	public static readonly HUC = 75;
	public static readonly IUC = 76;
	public static readonly JUC = 77;
	public static readonly KUC = 78;
	public static readonly LUC = 79;
	public static readonly MUC = 80;
	public static readonly NUC = 81;
	public static readonly OUC = 82;
	public static readonly PUC = 83;
	public static readonly QUC = 84;
	public static readonly RUC = 85;
	public static readonly SUC = 86;
	public static readonly TUC = 87;
	public static readonly UUC = 88;
	public static readonly VUC = 89;
	public static readonly WUC = 90;
	public static readonly XUC = 91;
	public static readonly YUC = 92;
	public static readonly ZUC = 93;
	public static readonly D1 = 94;
	public static readonly D2 = 95;
	public static readonly D3 = 96;
	public static readonly D4 = 97;
	public static readonly D5 = 98;
	public static readonly D6 = 99;
	public static readonly D7 = 100;
	public static readonly D8 = 101;
	public static readonly D9 = 102;
	public static readonly D0 = 103;
	public static readonly OtherChar = 104;
	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"BellChar", "ControlChar", "EscapeChar", "FormFeed", "NewLine", "CarriageReturn", 
		"Tab", "Backslash", "HexChar", "Dot", "DecimalDigit", "NotDecimalDigit", 
		"CharWithProperty", "CharWithoutProperty", "WhiteSpace", "NotWhiteSpace", 
		"WordChar", "NotWordChar", "CharacterClassStart", "CharacterClassEnd", 
		"Caret", "Hyphen", "QuestionMark", "Plus", "Star", "OpenBrace", "CloseBrace", 
		"Comma", "EndOfSubject", "Pipe", "OpenParen", "CloseParen", "LessThan", 
		"GreaterThan", "SingleQuote", "Underscore", "Colon", "Hash", "Equals", 
		"Exclamation", "Ampersand", "ALC", "BLC", "CLC", "DLC", "ELC", "FLC", 
		"GLC", "HLC", "ILC", "JLC", "KLC", "LLC", "MLC", "NLC", "OLC", "PLC", 
		"QLC", "RLC", "SLC", "TLC", "ULC", "VLC", "WLC", "XLC", "YLC", "ZLC", 
		"AUC", "BUC", "CUC", "DUC", "EUC", "FUC", "GUC", "HUC", "IUC", "JUC", 
		"KUC", "LUC", "MUC", "NUC", "OUC", "PUC", "QUC", "RUC", "SUC", "TUC", 
		"UUC", "VUC", "WUC", "XUC", "YUC", "ZUC", "D1", "D2", "D3", "D4", "D5", 
		"D6", "D7", "D8", "D9", "D0", "OtherChar", "UnderscoreAlphaNumerics", 
		"AlphaNumerics", "AlphaNumeric", "NonAlphaNumeric", "HexDigit", "ASCII",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\\a'", "'\\c'", "'\\e'", "'\\f'", "'\\n'", "'\\r'", "'\\t'", 
		"'\\'", undefined, "'.'", "'\\d'", "'\\D'", undefined, undefined, "'\\s'", 
		"'\\S'", "'\\w'", "'\\W'", "'['", "']'", "'^'", "'-'", "'?'", "'+'", "'*'", 
		"'{'", "'}'", "','", "'$'", "'|'", "'('", "')'", "'<'", "'>'", "'''", 
		"'_'", "':'", "'#'", "'='", "'!'", "'&'", "'a'", "'b'", "'c'", "'d'", 
		"'e'", "'f'", "'g'", "'h'", "'i'", "'j'", "'k'", "'l'", "'m'", "'n'", 
		"'o'", "'p'", "'q'", "'r'", "'s'", "'t'", "'u'", "'v'", "'w'", "'x'", 
		"'y'", "'z'", "'A'", "'B'", "'C'", "'D'", "'E'", "'F'", "'G'", "'H'", 
		"'I'", "'J'", "'K'", "'L'", "'M'", "'N'", "'O'", "'P'", "'Q'", "'R'", 
		"'S'", "'T'", "'U'", "'V'", "'W'", "'X'", "'Y'", "'Z'", "'1'", "'2'", 
		"'3'", "'4'", "'5'", "'6'", "'7'", "'8'", "'9'", "'0'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BellChar", "ControlChar", "EscapeChar", "FormFeed", "NewLine", 
		"CarriageReturn", "Tab", "Backslash", "HexChar", "Dot", "DecimalDigit", 
		"NotDecimalDigit", "CharWithProperty", "CharWithoutProperty", "WhiteSpace", 
		"NotWhiteSpace", "WordChar", "NotWordChar", "CharacterClassStart", "CharacterClassEnd", 
		"Caret", "Hyphen", "QuestionMark", "Plus", "Star", "OpenBrace", "CloseBrace", 
		"Comma", "EndOfSubject", "Pipe", "OpenParen", "CloseParen", "LessThan", 
		"GreaterThan", "SingleQuote", "Underscore", "Colon", "Hash", "Equals", 
		"Exclamation", "Ampersand", "ALC", "BLC", "CLC", "DLC", "ELC", "FLC", 
		"GLC", "HLC", "ILC", "JLC", "KLC", "LLC", "MLC", "NLC", "OLC", "PLC", 
		"QLC", "RLC", "SLC", "TLC", "ULC", "VLC", "WLC", "XLC", "YLC", "ZLC", 
		"AUC", "BUC", "CUC", "DUC", "EUC", "FUC", "GUC", "HUC", "IUC", "JUC", 
		"KUC", "LUC", "MUC", "NUC", "OUC", "PUC", "QUC", "RUC", "SUC", "TUC", 
		"UUC", "VUC", "WUC", "XUC", "YUC", "ZUC", "D1", "D2", "D3", "D4", "D5", 
		"D6", "D7", "D8", "D9", "D0", "OtherChar",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CommonRegexLexer._LITERAL_NAMES, CommonRegexLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CommonRegexLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CommonRegexLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CommonRegex.g4"; }

	// @Override
	public get ruleNames(): string[] { return CommonRegexLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CommonRegexLexer._serializedATN; }

	// @Override
	public get modeNames(): string[] { return CommonRegexLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02j\u01E9\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x06\n\u0101\n\n\r\n\x0E\n\u0102\x03\n\x03\n\x05\n\u0107\n\n\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03" +
		"%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03" +
		",\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x031\x031\x032\x032\x033\x03" +
		"3\x034\x034\x035\x035\x036\x036\x037\x037\x038\x038\x039\x039\x03:\x03" +
		":\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03" +
		"A\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x03F\x03F\x03G\x03G\x03H\x03" +
		"H\x03I\x03I\x03J\x03J\x03K\x03K\x03L\x03L\x03M\x03M\x03N\x03N\x03O\x03" +
		"O\x03P\x03P\x03Q\x03Q\x03R\x03R\x03S\x03S\x03T\x03T\x03U\x03U\x03V\x03" +
		"V\x03W\x03W\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03]\x03" +
		"]\x03^\x03^\x03_\x03_\x03`\x03`\x03a\x03a\x03b\x03b\x03c\x03c\x03d\x03" +
		"d\x03e\x03e\x03f\x03f\x03g\x03g\x03h\x03h\x03i\x03i\x03j\x03j\x06j\u01D9" +
		"\nj\rj\x0Ej\u01DA\x03k\x06k\u01DE\nk\rk\x0Ek\u01DF\x03l\x03l\x03m\x03" +
		"m\x03n\x03n\x03o\x03o\x02\x02\x02p\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13" +
		"%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02" +
		"\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02" +
		"$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]" +
		"\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02:s\x02" +
		";u\x02<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02B\x83\x02C\x85\x02D\x87" +
		"\x02E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02I\x91\x02J\x93\x02K\x95\x02L\x97" +
		"\x02M\x99\x02N\x9B\x02O\x9D\x02P\x9F\x02Q\xA1\x02R\xA3\x02S\xA5\x02T\xA7" +
		"\x02U\xA9\x02V\xAB\x02W\xAD\x02X\xAF\x02Y\xB1\x02Z\xB3\x02[\xB5\x02\\" +
		"\xB7\x02]\xB9\x02^\xBB\x02_\xBD\x02`\xBF\x02a\xC1\x02b\xC3\x02c\xC5\x02" +
		"d\xC7\x02e\xC9\x02f\xCB\x02g\xCD\x02h\xCF\x02i\xD1\x02j\xD3\x02\x02\xD5" +
		"\x02\x02\xD7\x02\x02\xD9\x02\x02\xDB\x02\x02\xDD\x02\x02\x03\x02\x05\x05" +
		"\x022;C\\c|\x05\x022;CHch\x03\x02\x02\x81\u01E7\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
		"\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
		"#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
		"\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
		"\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02" +
		"7\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02" +
		"\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02" +
		"\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03" +
		"\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02" +
		"\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02" +
		"Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02" +
		"\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02" +
		"\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03" +
		"\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02" +
		"\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02" +
		"{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81" +
		"\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87" +
		"\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D" +
		"\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93" +
		"\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99" +
		"\x03\x02\x02\x02\x02\x9B\x03\x02\x02\x02\x02\x9D\x03\x02\x02\x02\x02\x9F" +
		"\x03\x02\x02\x02\x02\xA1\x03\x02\x02\x02\x02\xA3\x03\x02\x02\x02\x02\xA5" +
		"\x03\x02\x02\x02\x02\xA7\x03\x02\x02\x02\x02\xA9\x03\x02\x02\x02\x02\xAB" +
		"\x03\x02\x02\x02\x02\xAD\x03\x02\x02\x02\x02\xAF\x03\x02\x02\x02\x02\xB1" +
		"\x03\x02\x02\x02\x02\xB3\x03\x02\x02\x02\x02\xB5\x03\x02\x02\x02\x02\xB7" +
		"\x03\x02\x02\x02\x02\xB9\x03\x02\x02\x02\x02\xBB\x03\x02\x02\x02\x02\xBD" +
		"\x03\x02\x02\x02\x02\xBF\x03\x02\x02\x02\x02\xC1\x03\x02\x02\x02\x02\xC3" +
		"\x03\x02\x02\x02\x02\xC5\x03\x02\x02\x02\x02\xC7\x03\x02\x02\x02\x02\xC9" +
		"\x03\x02\x02\x02\x02\xCB\x03\x02\x02\x02\x02\xCD\x03\x02\x02\x02\x02\xCF" +
		"\x03\x02\x02\x02\x02\xD1\x03\x02\x02\x02\x03\xDF\x03\x02\x02\x02\x05\xE2" +
		"\x03\x02\x02\x02\x07\xE5\x03\x02\x02\x02\t\xE8\x03\x02\x02\x02\v\xEB\x03" +
		"\x02\x02\x02\r\xEE\x03\x02\x02\x02\x0F\xF1\x03\x02\x02\x02\x11\xF4\x03" +
		"\x02\x02\x02\x13\xF6\x03\x02\x02\x02\x15\u0108\x03\x02\x02\x02\x17\u010A" +
		"\x03\x02\x02\x02\x19\u010D\x03\x02\x02\x02\x1B\u0110\x03\x02\x02\x02\x1D" +
		"\u0117\x03\x02\x02\x02\x1F\u011E\x03\x02\x02\x02!\u0121\x03\x02\x02\x02" +
		"#\u0124\x03\x02\x02\x02%\u0127\x03\x02\x02\x02\'\u012A\x03\x02\x02\x02" +
		")\u012C\x03\x02\x02\x02+\u012E\x03\x02\x02\x02-\u0130\x03\x02\x02\x02" +
		"/\u0132\x03\x02\x02\x021\u0134\x03\x02\x02\x023\u0136\x03\x02\x02\x02" +
		"5\u0138\x03\x02\x02\x027\u013A\x03\x02\x02\x029\u013C\x03\x02\x02\x02" +
		";\u013E\x03\x02\x02\x02=\u0140\x03\x02\x02\x02?\u0142\x03\x02\x02\x02" +
		"A\u0144\x03\x02\x02\x02C\u0146\x03\x02\x02\x02E\u0148\x03\x02\x02\x02" +
		"G\u014A\x03\x02\x02\x02I\u014C\x03\x02\x02\x02K\u014E\x03\x02\x02\x02" +
		"M\u0150\x03\x02\x02\x02O\u0152\x03\x02\x02\x02Q\u0154\x03\x02\x02\x02" +
		"S\u0156\x03\x02\x02\x02U\u0158\x03\x02\x02\x02W\u015A\x03\x02\x02\x02" +
		"Y\u015C\x03\x02\x02\x02[\u015E\x03\x02\x02\x02]\u0160\x03\x02\x02\x02" +
		"_\u0162\x03\x02\x02\x02a\u0164\x03\x02\x02\x02c\u0166\x03\x02\x02\x02" +
		"e\u0168\x03\x02\x02\x02g\u016A\x03\x02\x02\x02i\u016C\x03\x02\x02\x02" +
		"k\u016E\x03\x02\x02\x02m\u0170\x03\x02\x02\x02o\u0172\x03\x02\x02\x02" +
		"q\u0174\x03\x02\x02\x02s\u0176\x03\x02\x02\x02u\u0178\x03\x02\x02\x02" +
		"w\u017A\x03\x02\x02\x02y\u017C\x03\x02\x02\x02{\u017E\x03\x02\x02\x02" +
		"}\u0180\x03\x02\x02\x02\x7F\u0182\x03\x02\x02\x02\x81\u0184\x03\x02\x02" +
		"\x02\x83\u0186\x03\x02\x02\x02\x85\u0188\x03\x02\x02\x02\x87\u018A\x03" +
		"\x02\x02\x02\x89\u018C\x03\x02\x02\x02\x8B\u018E\x03\x02\x02\x02\x8D\u0190" +
		"\x03\x02\x02\x02\x8F\u0192\x03\x02\x02\x02\x91\u0194\x03\x02\x02\x02\x93" +
		"\u0196\x03\x02\x02\x02\x95\u0198\x03\x02\x02\x02\x97\u019A\x03\x02\x02" +
		"\x02\x99\u019C\x03\x02\x02\x02\x9B\u019E\x03\x02\x02\x02\x9D\u01A0\x03" +
		"\x02\x02\x02\x9F\u01A2\x03\x02\x02\x02\xA1\u01A4\x03\x02\x02\x02\xA3\u01A6" +
		"\x03\x02\x02\x02\xA5\u01A8\x03\x02\x02\x02\xA7\u01AA\x03\x02\x02\x02\xA9" +
		"\u01AC\x03\x02\x02\x02\xAB\u01AE\x03\x02\x02\x02\xAD\u01B0\x03\x02\x02" +
		"\x02\xAF\u01B2\x03\x02\x02\x02\xB1\u01B4\x03\x02\x02\x02\xB3\u01B6\x03" +
		"\x02\x02\x02\xB5\u01B8\x03\x02\x02\x02\xB7\u01BA\x03\x02\x02\x02\xB9\u01BC" +
		"\x03\x02\x02\x02\xBB\u01BE\x03\x02\x02\x02\xBD\u01C0\x03\x02\x02\x02\xBF" +
		"\u01C2\x03\x02\x02\x02\xC1\u01C4\x03\x02\x02\x02\xC3\u01C6\x03\x02\x02" +
		"\x02\xC5\u01C8\x03\x02\x02\x02\xC7\u01CA\x03\x02\x02\x02\xC9\u01CC\x03" +
		"\x02\x02\x02\xCB\u01CE\x03\x02\x02\x02\xCD\u01D0\x03\x02\x02\x02\xCF\u01D2" +
		"\x03\x02\x02\x02\xD1\u01D4\x03\x02\x02\x02\xD3\u01D8\x03\x02\x02\x02\xD5" +
		"\u01DD\x03\x02\x02\x02\xD7\u01E1\x03\x02\x02\x02\xD9\u01E3\x03\x02\x02" +
		"\x02\xDB\u01E5\x03\x02\x02\x02\xDD\u01E7\x03\x02\x02\x02\xDF\xE0\x07^" +
		"\x02\x02\xE0\xE1\x07c\x02\x02\xE1\x04\x03\x02\x02\x02\xE2\xE3\x07^\x02" +
		"\x02\xE3\xE4\x07e\x02\x02\xE4\x06\x03\x02\x02\x02\xE5\xE6\x07^\x02\x02" +
		"\xE6\xE7\x07g\x02\x02\xE7\b\x03\x02\x02\x02\xE8\xE9\x07^\x02\x02\xE9\xEA" +
		"\x07h\x02\x02\xEA\n\x03\x02\x02\x02\xEB\xEC\x07^\x02\x02\xEC\xED\x07p" +
		"\x02\x02\xED\f\x03\x02\x02\x02\xEE\xEF\x07^\x02\x02\xEF\xF0\x07t\x02\x02" +
		"\xF0\x0E\x03\x02\x02\x02\xF1\xF2\x07^\x02\x02\xF2\xF3\x07v\x02\x02\xF3" +
		"\x10\x03\x02\x02\x02\xF4\xF5\x07^\x02\x02\xF5\x12\x03\x02\x02\x02\xF6" +
		"\xF7\x07^\x02\x02\xF7\xF8\x07z\x02\x02\xF8\u0106\x03\x02\x02\x02\xF9\xFA" +
		"\x05\xDBn\x02\xFA\xFB\x05\xDBn\x02\xFB\u0107\x03\x02\x02\x02\xFC\xFD\x07" +
		"}\x02\x02\xFD\xFE\x05\xDBn\x02\xFE\u0100\x05\xDBn\x02\xFF\u0101\x05\xDB" +
		"n\x02\u0100\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0100" +
		"\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02" +
		"\u0104\u0105\x07\x7F\x02\x02\u0105\u0107\x03\x02\x02\x02\u0106\xF9\x03" +
		"\x02\x02\x02\u0106\xFC\x03\x02\x02\x02\u0107\x14\x03\x02\x02\x02\u0108" +
		"\u0109\x070\x02\x02\u0109\x16\x03\x02\x02\x02\u010A\u010B\x07^\x02\x02" +
		"\u010B\u010C\x07f\x02\x02\u010C\x18\x03\x02\x02\x02\u010D\u010E\x07^\x02" +
		"\x02\u010E\u010F\x07F\x02\x02\u010F\x1A\x03\x02\x02\x02\u0110\u0111\x07" +
		"^\x02\x02\u0111\u0112\x07r\x02\x02\u0112\u0113\x07}\x02\x02\u0113\u0114" +
		"\x03\x02\x02\x02\u0114\u0115\x05\xD3j\x02\u0115\u0116\x07\x7F\x02\x02" +
		"\u0116\x1C\x03\x02\x02\x02\u0117\u0118\x07^\x02\x02\u0118\u0119\x07R\x02" +
		"\x02\u0119\u011A\x07}\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C" +
		"\x05\xD3j\x02\u011C\u011D\x07\x7F\x02\x02\u011D\x1E\x03\x02\x02\x02\u011E" +
		"\u011F\x07^\x02\x02\u011F\u0120\x07u\x02\x02\u0120 \x03\x02\x02\x02\u0121" +
		"\u0122\x07^\x02\x02\u0122\u0123\x07U\x02\x02\u0123\"\x03\x02\x02\x02\u0124" +
		"\u0125\x07^\x02\x02\u0125\u0126\x07y\x02\x02\u0126$\x03\x02\x02\x02\u0127" +
		"\u0128\x07^\x02\x02\u0128\u0129\x07Y\x02\x02\u0129&\x03\x02\x02\x02\u012A" +
		"\u012B\x07]\x02\x02\u012B(\x03\x02\x02\x02\u012C\u012D\x07_\x02\x02\u012D" +
		"*\x03\x02\x02\x02\u012E\u012F\x07`\x02\x02\u012F,\x03\x02\x02\x02\u0130" +
		"\u0131\x07/\x02\x02\u0131.\x03\x02\x02\x02\u0132\u0133\x07A\x02\x02\u0133" +
		"0\x03\x02\x02\x02\u0134\u0135\x07-\x02\x02\u01352\x03\x02\x02\x02\u0136" +
		"\u0137\x07,\x02\x02\u01374\x03\x02\x02\x02\u0138\u0139\x07}\x02\x02\u0139" +
		"6\x03\x02\x02\x02\u013A\u013B\x07\x7F\x02\x02\u013B8\x03\x02\x02\x02\u013C" +
		"\u013D\x07.\x02\x02\u013D:\x03\x02\x02\x02\u013E\u013F\x07&\x02\x02\u013F" +
		"<\x03\x02\x02\x02\u0140\u0141\x07~\x02\x02\u0141>\x03\x02\x02\x02\u0142" +
		"\u0143\x07*\x02\x02\u0143@\x03\x02\x02\x02\u0144\u0145\x07+\x02\x02\u0145" +
		"B\x03\x02\x02\x02\u0146\u0147\x07>\x02\x02\u0147D\x03\x02\x02\x02\u0148" +
		"\u0149\x07@\x02\x02\u0149F\x03\x02\x02\x02\u014A\u014B\x07)\x02\x02\u014B" +
		"H\x03\x02\x02\x02\u014C\u014D\x07a\x02\x02\u014DJ\x03\x02\x02\x02\u014E" +
		"\u014F\x07<\x02\x02\u014FL\x03\x02\x02\x02\u0150\u0151\x07%\x02\x02\u0151" +
		"N\x03\x02\x02\x02\u0152\u0153\x07?\x02\x02\u0153P\x03\x02\x02\x02\u0154" +
		"\u0155\x07#\x02\x02\u0155R\x03\x02\x02\x02\u0156\u0157\x07(\x02\x02\u0157" +
		"T\x03\x02\x02\x02\u0158\u0159\x07c\x02\x02\u0159V\x03\x02\x02\x02\u015A" +
		"\u015B\x07d\x02\x02\u015BX\x03\x02\x02\x02\u015C\u015D\x07e\x02\x02\u015D" +
		"Z\x03\x02\x02\x02\u015E\u015F\x07f\x02\x02\u015F\\\x03\x02\x02\x02\u0160" +
		"\u0161\x07g\x02\x02\u0161^\x03\x02\x02\x02\u0162\u0163\x07h\x02\x02\u0163" +
		"`\x03\x02\x02\x02\u0164\u0165\x07i\x02\x02\u0165b\x03\x02\x02\x02\u0166" +
		"\u0167\x07j\x02\x02\u0167d\x03\x02\x02\x02\u0168\u0169\x07k\x02\x02\u0169" +
		"f\x03\x02\x02\x02\u016A\u016B\x07l\x02\x02\u016Bh\x03\x02\x02\x02\u016C" +
		"\u016D\x07m\x02\x02\u016Dj\x03\x02\x02\x02\u016E\u016F\x07n\x02\x02\u016F" +
		"l\x03\x02\x02\x02\u0170\u0171\x07o\x02\x02\u0171n\x03\x02\x02\x02\u0172" +
		"\u0173\x07p\x02\x02\u0173p\x03\x02\x02\x02\u0174\u0175\x07q\x02\x02\u0175" +
		"r\x03\x02\x02\x02\u0176\u0177\x07r\x02\x02\u0177t\x03\x02\x02\x02\u0178" +
		"\u0179\x07s\x02\x02\u0179v\x03\x02\x02\x02\u017A\u017B\x07t\x02\x02\u017B" +
		"x\x03\x02\x02\x02\u017C\u017D\x07u\x02\x02\u017Dz\x03\x02\x02\x02\u017E" +
		"\u017F\x07v\x02\x02\u017F|\x03\x02\x02\x02\u0180\u0181\x07w\x02\x02\u0181" +
		"~\x03\x02\x02\x02\u0182\u0183\x07x\x02\x02\u0183\x80\x03\x02\x02\x02\u0184" +
		"\u0185\x07y\x02\x02\u0185\x82\x03\x02\x02\x02\u0186\u0187\x07z\x02\x02" +
		"\u0187\x84\x03\x02\x02\x02\u0188\u0189\x07{\x02\x02\u0189\x86\x03\x02" +
		"\x02\x02\u018A\u018B\x07|\x02\x02\u018B\x88\x03\x02\x02\x02\u018C\u018D" +
		"\x07C\x02\x02\u018D\x8A\x03\x02\x02\x02\u018E\u018F\x07D\x02\x02\u018F" +
		"\x8C\x03\x02\x02\x02\u0190\u0191\x07E\x02\x02\u0191\x8E\x03\x02\x02\x02" +
		"\u0192\u0193\x07F\x02\x02\u0193\x90\x03\x02\x02\x02\u0194\u0195\x07G\x02" +
		"\x02\u0195\x92\x03\x02\x02\x02\u0196\u0197\x07H\x02\x02\u0197\x94\x03" +
		"\x02\x02\x02\u0198\u0199\x07I\x02\x02\u0199\x96\x03\x02\x02\x02\u019A" +
		"\u019B\x07J\x02\x02\u019B\x98\x03\x02\x02\x02\u019C\u019D\x07K\x02\x02" +
		"\u019D\x9A\x03\x02\x02\x02\u019E\u019F\x07L\x02\x02\u019F\x9C\x03\x02" +
		"\x02\x02\u01A0\u01A1\x07M\x02\x02\u01A1\x9E\x03\x02\x02\x02\u01A2\u01A3" +
		"\x07N\x02\x02\u01A3\xA0\x03\x02\x02\x02\u01A4\u01A5\x07O\x02\x02\u01A5" +
		"\xA2\x03\x02\x02\x02\u01A6\u01A7\x07P\x02\x02\u01A7\xA4\x03\x02\x02\x02" +
		"\u01A8\u01A9\x07Q\x02\x02\u01A9\xA6\x03\x02\x02\x02\u01AA\u01AB\x07R\x02" +
		"\x02\u01AB\xA8\x03\x02\x02\x02\u01AC\u01AD\x07S\x02\x02\u01AD\xAA\x03" +
		"\x02\x02\x02\u01AE\u01AF\x07T\x02\x02\u01AF\xAC\x03\x02\x02\x02\u01B0" +
		"\u01B1\x07U\x02\x02\u01B1\xAE\x03\x02\x02\x02\u01B2\u01B3\x07V\x02\x02" +
		"\u01B3\xB0\x03\x02\x02\x02\u01B4\u01B5\x07W\x02\x02\u01B5\xB2\x03\x02" +
		"\x02\x02\u01B6\u01B7\x07X\x02\x02\u01B7\xB4\x03\x02\x02\x02\u01B8\u01B9" +
		"\x07Y\x02\x02\u01B9\xB6\x03\x02\x02\x02\u01BA\u01BB\x07Z\x02\x02\u01BB" +
		"\xB8\x03\x02\x02\x02\u01BC\u01BD\x07[\x02\x02\u01BD\xBA\x03\x02\x02\x02" +
		"\u01BE\u01BF\x07\\\x02\x02\u01BF\xBC\x03\x02\x02\x02\u01C0\u01C1\x073" +
		"\x02\x02\u01C1\xBE\x03\x02\x02\x02\u01C2\u01C3\x074\x02\x02\u01C3\xC0" +
		"\x03\x02\x02\x02\u01C4\u01C5\x075\x02\x02\u01C5\xC2\x03\x02\x02\x02\u01C6" +
		"\u01C7\x076\x02\x02\u01C7\xC4\x03\x02\x02\x02\u01C8\u01C9\x077\x02\x02" +
		"\u01C9\xC6\x03\x02\x02\x02\u01CA\u01CB\x078\x02\x02\u01CB\xC8\x03\x02" +
		"\x02\x02\u01CC\u01CD\x079\x02\x02\u01CD\xCA\x03\x02\x02\x02\u01CE\u01CF" +
		"\x07:\x02\x02\u01CF\xCC\x03\x02\x02\x02\u01D0\u01D1\x07;\x02\x02\u01D1" +
		"\xCE\x03\x02\x02\x02\u01D2\u01D3\x072\x02\x02\u01D3\xD0\x03\x02\x02\x02" +
		"\u01D4\u01D5\v\x02\x02\x02\u01D5\xD2\x03\x02\x02\x02\u01D6\u01D9\x07a" +
		"\x02\x02\u01D7\u01D9\x05\xD7l\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D7" +
		"\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02" +
		"\u01DA\u01DB\x03\x02\x02\x02\u01DB\xD4\x03\x02\x02\x02\u01DC\u01DE\x05" +
		"\xD7l\x02\u01DD\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF" +
		"\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\xD6\x03\x02\x02" +
		"\x02\u01E1\u01E2\t\x02\x02\x02\u01E2\xD8\x03\x02\x02\x02\u01E3\u01E4\n" +
		"\x02\x02\x02\u01E4\xDA\x03\x02\x02\x02\u01E5\u01E6\t\x03\x02\x02\u01E6" +
		"\xDC\x03\x02\x02\x02\u01E7\u01E8\t\x04\x02\x02\u01E8\xDE\x03\x02\x02\x02" +
		"\b\x02\u0102\u0106\u01D8\u01DA\u01DF\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CommonRegexLexer.__ATN) {
			CommonRegexLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CommonRegexLexer._serializedATN));
		}

		return CommonRegexLexer.__ATN;
	}

}

