import 'dart:math';

import 'package:flutter/material.dart';
import 'package:task5/model/data.dart';
import 'package:task5/widget/button.dart';
import 'package:task5/widget/on-boarding.dart';

import 'model/api.dart';


class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  final _pageController = PageController();
  int _currentPageIndex = 0;
  List<Quote> quoteList = [];
  List favList = [];

  String image = "images/1.jpeg";
  fetchData() async {
    await ApiService.instance.fetchQuotes().then((value) {
      print(value.length);
      quoteList = value;
    }, onError: (error) {
      print(error);
    });
    if (await getListFromHive() != null) {
      favList = await getListFromHive();
    } else {
      print("object");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(image: AssetImage(image), fit: BoxFit.cover),
        ),
        child: SafeArea(
          child: FutureBuilder(
            future: fetchData(),
            builder: (context, snapshot) => Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Expanded(
                  child: PageView.builder(
                    controller: _pageController,
                    itemCount: quoteList.length,
                    itemBuilder: (context, index) {
                      return OnboardingWidget(
                        author: quoteList[index].author,
                        content: quoteList[index].content,
                      );
                    },
                    onPageChanged: (index) {
                      setState(() {
                        Random random = Random();
                        int randomIndex = random.nextInt(listImage.length);
                        _currentPageIndex = index;
                        image = listImage[randomIndex];
                      });
                      print(favList);
                    },
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      OnboardingButton(
                        text: 'previous',
                        function: () {
                          _pageController.previousPage(
                            duration: const Duration(milliseconds: 500),
                            curve: Curves.easeInOut,
                          );
                        },
                      ),
                      OnboardingButton(
                        text: 'Next',
                        function: () {
                          _pageController.nextPage(
                            duration: const Duration(milliseconds: 500),
                            curve: Curves.easeInOut,
                          );
                        },
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

