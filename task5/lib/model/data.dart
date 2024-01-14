import 'package:hive/hive.dart';



class Quote {
  String author;
  String content;

  Quote({
    required this.author,
    required this.content,
  });

  factory Quote.fromJson(Map<String, dynamic> json) {
    return Quote(
      author: json['author'],
      content: json['content'],
    );
  }
}

Future<void> saveThisQuote(String quote) async {
  final box = await Hive.openBox<String>('quotes');

  await box.add(quote);
  await box.close();
}

Future<List<String>> getListFromHive() async {
  final box = await Hive.openBox<String>('quotes');

  final List<String> list = box.values.toList();

  await box.close();

  return list;
}

List<String> listImage = [
  "images/1.jpg",
  "images/2.jpg",
  "images/4.jpg",


];



